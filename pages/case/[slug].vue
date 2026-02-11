<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import { renderMarkdownToHtml } from "~/lib/markdown";

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

const markdownHtml = computed(() => renderMarkdownToHtml(project.content ?? ""));
const hasMarkdownContent = computed(() => project.content.trim().length > 0);

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
		<article class="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
			<!-- Case details -->
			<div
				class="lg:flex gap-6 rounded-[32px] border border-primary-900/20 bg-card/95 p-6 shadow-[0_30px_100px_rgba(14,35,24,0.12)] md:p-10"
			>
				<!-- Left side -->
				<div
					class="relative overflow-hidden rounded-3xl border border-border/70 bg-secondary-100 w-full lg:w-1/2"
				>
					<NuxtImg
						:src="project.image"
						:alt="project.title"
						width="1600"
						height="1000"
						sizes="(max-width: 1024px) 100vw, 45vw"
						class="h-full w-full object-cover"
						loading="eager"
					/>
				</div>

				<!-- Right side -->
				<div class="space-y-6 w-full lg:w-1/2">
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

			</div>

			<!-- Case details -->
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
					<p v-if="!hasMarkdownContent">
						Estou organizando este case com mais detalhes e decisões de
						processo. Em breve ele estará completo.
					</p>
					<div v-else class="case-markdown space-y-4" v-html="markdownHtml" />
				</div>
			</section>

			<Footer variant="case" />
		</article>
	</main>
</template>

<style scoped>
.case-markdown:deep(h1),
.case-markdown:deep(h2),
.case-markdown:deep(h3),
.case-markdown:deep(h4),
.case-markdown:deep(h5),
.case-markdown:deep(h6) {
	margin-top: 1.25rem;
	font-weight: 600;
	line-height: 1.2;
	color: hsl(var(--foreground));
}

.case-markdown:deep(h1) {
	font-size: 1.875rem;
}

.case-markdown:deep(h2) {
	font-size: 1.5rem;
}

.case-markdown:deep(h3) {
	font-size: 1.25rem;
}

.case-markdown:deep(p) {
	margin-top: 1rem;
}

.case-markdown:deep(ul),
.case-markdown:deep(ol) {
	margin-top: 1rem;
	padding-left: 1.25rem;
}

.case-markdown:deep(ul) {
	list-style-type: disc;
}

.case-markdown:deep(ol) {
	list-style-type: decimal;
}

.case-markdown:deep(li + li) {
	margin-top: 0.5rem;
}

.case-markdown:deep(strong) {
	font-weight: 700;
}

.case-markdown:deep(em) {
	font-style: italic;
}

.case-markdown:deep(code) {
	border-radius: 0.375rem;
	background-color: hsl(var(--secondary));
	padding: 0.125rem 0.375rem;
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
		"Liberation Mono", "Courier New", monospace;
	font-size: 0.875rem;
}

.case-markdown:deep(a) {
	text-decoration: underline;
	text-underline-offset: 3px;
}
</style>
