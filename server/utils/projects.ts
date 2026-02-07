import { createError } from "h3";
import { ofetch } from "ofetch";
import type { ProjectCase } from "~/types/project";

type DirectusFile = {
	id: string;
};

export type DirectusProject = {
	id: string | number;
	slug?: string | null;
	title?: string | null;
	short_description?: string | null;
	content?: string | null;
	skills?: string[] | string | Array<Record<string, unknown>> | null;
	cover_image?: string | DirectusFile | null;
};

const slugify = (value: string): string =>
	value
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");

const resolveSlug = (item: DirectusProject): string => {
	const directusSlug = slugify(item.slug ?? "");
	if (directusSlug) return directusSlug;

	const titleSlug = slugify(item.title ?? "");
	if (titleSlug) return `${titleSlug}-${item.id}`;

	return `project-${item.id}`;
};

const normalizeTags = (input: DirectusProject["skills"]): string[] => {
	if (!input) return [];

	if (Array.isArray(input)) {
		return input
			.map((tag) => {
				if (typeof tag === "string") return tag.trim();
				if (tag && typeof tag === "object") {
					const nested =
						(tag as { skills_id?: Record<string, unknown> }).skills_id ??
						(tag as { skill_id?: Record<string, unknown> }).skill_id ??
						(tag as { skill?: Record<string, unknown> }).skill ??
						(tag as { tags_id?: Record<string, unknown> }).tags_id ??
						(tag as { tag_id?: Record<string, unknown> }).tag_id ??
						(tag as { tag?: Record<string, unknown> }).tag ??
						tag;
					const value =
						(nested as { name?: string }).name ??
						(nested as { label?: string }).label ??
						(nested as { title?: string }).title;
					return value?.toString().trim() ?? "";
				}
				return "";
			})
			.filter(Boolean);
	}

	if (typeof input === "string") {
		return input
			.split(",")
			.map((tag) => tag.trim())
			.filter(Boolean);
	}

	return [];
};

const resolveAssetUrl = (
	baseUrl: string,
	file: DirectusProject["cover_image"],
): string | undefined => {
	if (!file) return undefined;

	if (typeof file === "string") {
		if (/^https?:\/\//i.test(file)) {
			return file;
		}
		return `${baseUrl}/assets/${file}`;
	}

	if (typeof file === "object" && "id" in file && file.id) {
		return `${baseUrl}/assets/${file.id}`;
	}

	return undefined;
};

export const mapDirectusProject = (
	baseUrl: string,
	item: DirectusProject,
): ProjectCase => ({
	id: item.id,
	slug: resolveSlug(item),
	title: item.title ?? "",
	description: item.short_description ?? item.content ?? "",
	content: item.content ?? "",
	tags: normalizeTags(item.skills),
	image: resolveAssetUrl(baseUrl, item.cover_image),
});

export const fetchDirectusProjects = async (options: {
	directusUrl: string;
	directusToken?: string;
}): Promise<ProjectCase[]> => {
	const baseUrl = (options.directusUrl || "").replace(/\/+$/, "");

	if (!baseUrl) {
		throw createError({
			statusCode: 500,
			statusMessage: "DIRECTUS_URL não configurada",
		});
	}

	const headers: Record<string, string> = {};
	if (options.directusToken) {
		headers.Authorization = `Bearer ${options.directusToken}`;
	}

	const directus = ofetch.create({
		baseURL: baseUrl,
		headers,
	});

	const response = await directus<{ data?: DirectusProject[] }>(
		"/items/projects",
		{
			query: {
				limit: -1,
			},
		}
	);

	const items = Array.isArray(response?.data) ? response.data : [];
	return items.map((item) => mapDirectusProject(baseUrl, item));
};
