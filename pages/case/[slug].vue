<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";

const route = useRoute();
const slugParam = decodeURIComponent(String(route.params.slug ?? ""));
const siteBaseUrl = useSiteBaseUrl();

const { data: projects, error } = await useProjects();

if (error.value) {
	throw createError({
		statusCode: error.value.statusCode ?? 500,
		statusMessage: "Não foi possível carregar os detalhes do case.",
	});
}

const project = projects.value.find((item) => item.slug === slugParam);

if (!project) {
	throw createError({
		statusCode: 404,
		statusMessage: "Case não encontrado.",
	});
}

const contentParagraphs = project.content
	.split(/\n{2,}/)
	.map((paragraph) => paragraph.replace(/\n/g, " ").trim())
	.filter(Boolean);

useSeoMeta({
	title: `${project.title} - Case`,
	description: project.description || "Detalhes do projeto",
	ogTitle: `${project.title} - Case`,
	ogDescription: project.description || "Detalhes do projeto",
	ogImage: project.image,
	twitterTitle: `${project.title} - Case`,
	twitterDescription: project.description || "Detalhes do projeto",
	twitterImage: project.image,
});

const caseSchema = computed(() => ({
	"@context": "https://schema.org",
	"@type": "CreativeWork",
	"@id": `${siteBaseUrl.value}/case/${project.slug}#creativework`,
	url: `${siteBaseUrl.value}/case/${project.slug}`,
	name: project.title,
	description: project.description || "Detalhes do projeto",
	inLanguage: "pt-BR",
	keywords: project.tags.join(", "),
	image: project.image ? [project.image] : undefined,
	author: {
		"@id": `${siteBaseUrl.value}/#person`,
	},
}));

useHead(() => ({
	script: [
		{
			key: `schema-case-${project.slug}`,
			type: "application/ld+json",
			children: JSON.stringify(caseSchema.value),
		},
	],
}));
</script>

<template>
	<main class="min-h-screen px-4 pb-16 pt-32">
		<article class="mx-auto flex w-full max-w-6xl flex-col gap-8">
			<NuxtLink
				to="/"
				class="inline-flex w-fit items-center gap-2 text-sm font-medium text-primary-700 transition hover:text-primary-900"
			>
				<ArrowLeft class="size-4" />
				Voltar para início
			</NuxtLink>

			<header
				class="grid gap-6 rounded-[32px] border border-primary-900/20 bg-card/95 p-6 shadow-[0_30px_100px_rgba(14,35,24,0.12)] md:p-10 lg:grid-cols-[1.1fr,0.9fr]"
			>
				<div class="space-y-6">
					<div class="space-y-3">
						<p
							class="text-xs font-semibold uppercase tracking-[0.35em] text-primary-600"
						>
							case
						</p>
						<h1
							class="text-3xl font-semibold leading-tight text-foreground md:text-5xl"
						>
							{{ project.title }}
						</h1>
						<p
							class="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
						>
							{{ project.description }}
						</p>
					</div>

					<ul
						v-if="project.tags.length"
						class="flex flex-wrap gap-2"
						aria-label="Tecnologias e habilidades do projeto"
					>
						<li v-for="tag in project.tags" :key="tag">
							<span
								class="inline-flex items-center rounded-full border border-primary-700/20 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-primary-800"
							>
								{{ tag }}
							</span>
						</li>
					</ul>
				</div>

				<div
					class="relative overflow-hidden rounded-3xl border border-border/70 bg-secondary-100"
				>
					<NuxtImg
						v-if="project.image"
						:src="project.image"
						:alt="project.title"
						width="1600"
						height="1000"
						sizes="(max-width: 1024px) 100vw, 45vw"
						class="h-full w-full object-cover"
						loading="eager"
					/>
					<div
						v-else
						class="flex h-full min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(26,74,58,0.26),rgba(26,74,58,0.06))] p-6 text-center text-sm font-medium text-primary-800"
					>
						Imagem do projeto em atualização
					</div>
				</div>
			</header>

			<section
				class="rounded-[28px] border border-border/80 bg-secondary-50/70 p-6 md:p-10"
			>
				<p
					class="text-xs font-semibold uppercase tracking-[0.3em] text-primary-700"
				>
					detalhamento
				</p>
				<h2 class="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
					Como o projeto foi construído
				</h2>

				<div class="mt-6 space-y-4 text-base leading-relaxed text-foreground/90">
					<p v-if="contentParagraphs.length === 0">
						Estou organizando este case com mais detalhes e decisões de
						processo. Em breve ele estará completo.
					</p>
					<p
						v-for="(paragraph, index) in contentParagraphs"
						:key="`${project.slug}-paragraph-${index}`"
					>
						{{ paragraph }}
					</p>
				</div>
			</section>

			<footer
				class="rounded-[28px] bg-primary px-6 py-8 text-secondary md:px-10"
			>
				<div
					class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
				>
					<p class="text-lg font-medium leading-snug md:max-w-2xl">
						Quer aplicar uma abordagem parecida no seu produto?
					</p>
					<NuxtLink
						to="/contato"
						class="inline-flex w-fit items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-secondary-100"
					>
						Conversar sobre projeto
					</NuxtLink>
				</div>
			</footer>
		</article>
	</main>
</template>
