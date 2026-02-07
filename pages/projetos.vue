<script setup lang="ts">
import { computed, ref } from "vue";
import ProjectCard from "~/components/projects/ProjectCard.vue";

const { data: projects, error } = await useProjects();
const siteBaseUrl = useSiteBaseUrl();

if (error.value) {
	throw createError({
		statusCode: error.value.statusCode ?? 500,
		statusMessage: "Não foi possível carregar os projetos.",
	});
}

const search = ref("");
const activeTag = ref("all");
const sortBy = ref<"recent" | "alphabetical">("recent");

const tagOptions = computed(() => {
	const tagsMap = new Map<string, string>();

	for (const project of projects.value) {
		for (const tag of project.tags) {
			const normalized = tag.trim().toLowerCase();
			if (!normalized || tagsMap.has(normalized)) continue;
			tagsMap.set(normalized, tag.trim());
		}
	}

	return Array.from(tagsMap.entries())
		.map(([value, label]) => ({ value, label }))
		.sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
});

const normalizedSearch = computed(() => search.value.trim().toLowerCase());

const filteredProjects = computed(() => {
	const currentSearch = normalizedSearch.value;
	const base = projects.value.filter((project) => {
		const byTag =
			activeTag.value === "all" ||
			project.tags.some((tag) => tag.trim().toLowerCase() === activeTag.value);

		if (!byTag) return false;
		if (!currentSearch) return true;

		const haystack = [
			project.title,
			project.description,
			project.content ?? "",
			project.tags.join(" "),
		]
			.join(" ")
			.toLowerCase();

		return haystack.includes(currentSearch);
	});

	if (sortBy.value === "alphabetical") {
		return [...base].sort((a, b) => a.title.localeCompare(b.title, "pt-BR"));
	}

	return base;
});

const hasActiveFilters = computed(
	() => activeTag.value !== "all" || normalizedSearch.value.length > 0
);

const clearFilters = () => {
	search.value = "";
	activeTag.value = "all";
	sortBy.value = "recent";
};

useSeoMeta({
	title: "Projetos e Cases",
	description:
		"Todos os cases de design e desenvolvimento de Edi Gabriel, com filtros por tecnologia e contexto de projeto.",
	ogTitle: "Projetos e Cases",
	ogDescription:
		"Explore todos os projetos de Edi Gabriel em Product Design, UI/UX e desenvolvimento front-end.",
});

const projectsSchema = computed(() => ({
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": `${siteBaseUrl.value}/projetos#webpage`,
	url: `${siteBaseUrl.value}/projetos`,
	name: "Projetos e Cases",
	mainEntity: {
		"@type": "ItemList",
		itemListElement: projects.value.map((project, index) => ({
			"@type": "ListItem",
			position: index + 1,
			url: `${siteBaseUrl.value}/case/${project.slug}`,
			name: project.title,
		})),
	},
}));

useHead(() => ({
	script: [
		{
			key: "schema-projects-list",
			type: "application/ld+json",
			children: JSON.stringify(projectsSchema.value),
		},
	],
}));
</script>

<template>
	<main class="min-h-screen px-4 pb-16 pt-32">
		<section
			class="mx-auto flex w-full max-w-[1440px] flex-col gap-8 rounded-[32px] border border-border/70 bg-card/95 p-6 shadow-[0_30px_100px_rgba(14,35,24,0.08)] md:p-10"
		>
			<header class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
				<div class="space-y-2">
					<p class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-700">
						portfólio completo
					</p>
					<h1 class="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
						Todos os Cases
					</h1>
					<p class="max-w-2xl text-base text-muted-foreground md:text-lg">
						Filtre por tecnologia, pesquise por contexto e explore os projetos em detalhe.
					</p>
				</div>

				<p class="text-sm font-medium text-primary-700">
					{{ filteredProjects.length }} resultado<span v-if="filteredProjects.length !== 1">s</span>
				</p>
			</header>

			<section
				class="flex flex-col gap-5 rounded-3xl border border-border/60 bg-secondary-50/70 p-4 md:p-6"
				aria-label="Filtros de projetos"
			>
				<div class="grid gap-4 md:grid-cols-[1.6fr,0.7fr,auto] md:items-end">
					<div class="space-y-2">
						<label
							for="project-search"
							class="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700"
						>
							Buscar
						</label>
						<Input
							id="project-search"
							v-model="search"
							type="search"
							placeholder="Nome do projeto, contexto, tecnologia..."
							class="bg-background/80"
						/>
					</div>

					<div class="space-y-2">
						<label
							for="sort-by"
							class="text-xs font-semibold uppercase tracking-[0.22em] text-primary-700"
						>
							Ordenar
						</label>
						<select
							id="sort-by"
							v-model="sortBy"
							class="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
						>
							<option value="recent">Mais recentes</option>
							<option value="alphabetical">Ordem alfabética</option>
						</select>
					</div>

					<Button
						v-if="hasActiveFilters"
						type="button"
						variant="outline"
						class="md:mb-0.5"
						@click="clearFilters"
					>
						Limpar filtros
					</Button>
				</div>

				<div class="flex flex-wrap gap-2">
					<button
						type="button"
						class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] transition"
						:class="
							activeTag === 'all'
								? 'border-primary-700 bg-primary text-secondary'
								: 'border-primary-700/20 bg-background text-primary-800 hover:border-primary-700/50 hover:bg-primary-50'
						"
						@click="activeTag = 'all'"
					>
						Todas
					</button>

					<button
						v-for="tag in tagOptions"
						:key="tag.value"
						type="button"
						class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] transition"
						:class="
							activeTag === tag.value
								? 'border-primary-700 bg-primary text-secondary'
								: 'border-primary-700/20 bg-background text-primary-800 hover:border-primary-700/50 hover:bg-primary-50'
						"
						@click="activeTag = tag.value"
					>
						{{ tag.label }}
					</button>
				</div>
			</section>

			<div
				v-if="filteredProjects.length === 0"
				class="rounded-3xl border border-dashed border-primary-700/30 bg-primary-50/50 px-6 py-14 text-center"
			>
				<p class="text-lg font-medium text-primary-900">
					Nenhum projeto encontrado com os filtros atuais.
				</p>
				<p class="mt-2 text-sm text-primary-800">
					Tente limpar os filtros ou buscar outro termo.
				</p>
			</div>

			<div v-else class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				<ProjectCard
					v-for="(project, index) in filteredProjects"
					:key="project.id"
					:slug="project.slug"
					:title="project.title"
					:description="project.description"
					:tags="project.tags"
					:image="project.image"
					:index="index"
				/>
			</div>
		</section>
	</main>
</template>
