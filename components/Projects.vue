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

import cartaoDaGenteImage from "~/assets/projects/cdt.png";
import ativacaoNoFutebolImage from "~/assets/projects/fut.png";
import portalEs9Image from "~/assets/projects/sdt.png";
import vivaSorteImage from "~/assets/projects/vvs.png";

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
			title: "Viva Sorte +",
			description: "Sorteios que transforma vidas em todo o Brasil",
			tags: [ "Desenvolvimento", "UI/UX", "Product Design" ],
			image: vivaSorteImage,
		},
		{
			title: "Cartão da Gente",
			description: "Muito mais que um cartão de beneficios",
			tags: ["Product Design", "UI/UX"],
			image: cartaoDaGenteImage,
		},
		{
			title: "Sabadão de Todos",
			description: "Noites de sábado ganharam ainda mais diversão",
			tags: ["Product Design", "UI/UX", "Desenvolvimento"],
			image: portalEs9Image,
		},
		{
			title: "Ativação no Futebol",
			description: "Ativação de benefícios para os torcedores",
			tags: ["Product Design", "UI/UX", "Desenvolvimento"],
			image: ativacaoNoFutebolImage,
		},
	];
</script>
