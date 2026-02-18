<template>
	<section
		id="projects"
		ref="sectionRef"
		class="mx-auto max-w-[1440px] px-4 p-12 text-dark"
	>
		<div
			class="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
		>
			<div>
				<p
					class="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700"
				>
					Portfólio
				</p>
				<h2 class="text-3xl font-semibold md:text-4xl">
					Principais Trabalhos
				</h2>
			</div>

			<Button
				as-child
				size="lg"
				variant="link"
				class="text-primary-700"
			>
				<NuxtLink to="/projetos">
					Ver todos os cases

					<LucideArrowRight class="size-4" />
				</NuxtLink>
			</Button>
		</div>

		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			<ProjectCard
				v-for="(project, index) in featuredProjects"
				:key="project.id"
				:slug="project.slug"
				:title="project.title"
				:description="project.description"
				:tags="project.tags"
				:image="project.image"
				:index="index"
				:in-view="isInView"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import { LucideArrowRight } from "lucide-vue-next";
import { useInView } from "motion-v";
import { computed, ref } from "vue";
import ProjectCard from "~/components/projects/ProjectCard.vue";
import type { ProjectCase } from "~/types/project";

const sectionRef = ref<HTMLElement | null>(null);
const isInView = useInView(sectionRef, {
	once: true,
	margin: "0px 0px -25% 0px",
});

const { data: projects } = await useProjects();
const featuredProjects = computed<ProjectCase[]>(() => projects.value.slice(0, 6));
</script>
