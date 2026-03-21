<template>
	<main class="min-h-screen px-4 pb-16 pt-32 container w-full">
		<h1 class="text-3xl font-semibold text-foreground md:text-5xl mb-6">
			Projetos
		</h1>

		<div
			v-if="projects.length === 0"
			class="rounded-3xl border border-dashed border-primary-700/30 bg-primary-50/50 px-6 py-14 text-center"
		>
			<p class="text-lg font-medium text-primary-900">
				Nenhum projeto disponível no momento.
			</p>
			<p class="mt-2 text-sm text-primary-800">
				Assim que novos cases forem publicados, eles aparecerão aqui.
			</p>
		</div>

		<div v-else class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			<ProjectCard
				v-for="(project, index) in projects"
				:key="project.id"
				:slug="project.slug"
				:title="project.title"
				:description="project.description"
				:tags="project.tags"
				:image="project.image"
				:index="index"
			/>
		</div>
	</main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ProjectCard from "~/components/projects/ProjectCard.vue";

const { data: projects, error } = await useProjects();
const siteBaseUrl = useSiteBaseUrl();

if (error.value) {
	throw createError({
		statusCode: error.value.statusCode ?? 500,
		statusMessage: "Não foi possível carregar os projetos.",
	});
}

useSeoMeta({
	title: "Projetos e Cases",
	description:
		"Todos os cases de design e desenvolvimento de Edi Gabriel em uma única página.",
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
