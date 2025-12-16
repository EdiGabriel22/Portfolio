<template>
	<section
		id="projects"
		ref="sectionRef"
		class="mx-auto max-w-[1440px] px-4 pb-16 text-dark"
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
			<a
				href="#projects"
				class="text-sm font-medium text-primary-900 underline-offset-4 transition hover:underline"
				>VER TODOS</a
			>
		</div>

		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			<ProjectCard
				v-for="(project, index) in projects"
				:key="project.title"
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
	import { useInView } from "motion-v";
import { ref } from "vue";

	type Project = {
		title: string;
		description: string;
		tags: string[];
		image?: string;
	};

	const sectionRef = ref<HTMLElement | null>(null);
	const isInView = useInView(sectionRef, {
		once: true,
		margin: "0px 0px -25% 0px",
	});

	const projects: Project[] = [
		{
			title: "Viva Sorte",
			description:
				"Dashboard e plataforma de sorteios com foco em retenção.",
			tags: ["UI/UX", "Desenvolvimento"],
		},
		{
			title: "Cartão da Gente",
			description: "Experiência mobile-first para gestão de benefícios.",
			tags: ["UI/UX", "Desenvolvimento"],
		},
		{
			title: "Portal ES9",
			description: "Landing institucional com identidade vibrante.",
			tags: ["UI/UX", "Desenvolvimento"],
		},
		{
			title: "App Fideliza",
			description:
				"Aplicativo de pontos e recompensas com onboarding guiado.",
			tags: ["UI/UX", "Desenvolvimento"],
		},
		{
			title: "Dashboard Cartões",
			description: "Console administrativo com visão 360° de clientes.",
			tags: ["UI/UX", "Desenvolvimento"],
		},
		{
			title: "E-commerce Verde",
			description:
				"Loja sustentável com destaque para impacto ambiental.",
			tags: ["UI/UX", "Desenvolvimento"],
		},
	];
</script>
