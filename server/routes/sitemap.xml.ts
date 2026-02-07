import { fetchDirectusProjects } from "~/server/utils/projects";

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const requestUrl = getRequestURL(event);
	const baseUrl =
		(config.public.siteUrl || "").replace(/\/+$/, "") || requestUrl.origin;

	const staticUrls = ["/", "/projetos", "/contato"];

	let caseUrls: string[] = [];
	try {
		const projects = await fetchDirectusProjects({
			directusUrl: config.directusUrl,
			directusToken: config.directusToken,
		});
		caseUrls = projects.map((project) => `/case/${project.slug}`);
	} catch {
		caseUrls = [];
	}

	const urlSet = [...new Set([...staticUrls, ...caseUrls])];
	const lastmod = new Date().toISOString();

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlSet
	.map((path) => {
		const loc = path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`;
		return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
	})
	.join("\n")}
</urlset>`;

	setHeader(event, "Content-Type", "application/xml; charset=utf-8");
	return body;
});
