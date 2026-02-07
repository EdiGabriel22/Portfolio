<script setup lang="ts">
import Header from "~/components/layout/Header.vue";

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const siteBaseUrl = useSiteBaseUrl();

const socialProfiles = [
	"https://www.linkedin.com/in/edi-gabriel/",
	"https://github.com/EdiGabriel22",
	"https://www.behance.net/edigabriel_",
];

const defaultOgImageUrl = computed(() => {
	const configured = runtimeConfig.public.defaultOgImage || "/og-image.png";
	if (/^https?:\/\//i.test(configured)) {
		return configured;
	}

	const path = configured.startsWith("/") ? configured : `/${configured}`;
	return `${siteBaseUrl.value}${path}`;
});

const canonicalUrl = computed(() => {
	if (route.path === "/") {
		return `${siteBaseUrl.value}/`;
	}

	return `${siteBaseUrl.value}${route.path}`;
});

const personSchema = computed(() => ({
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": `${siteBaseUrl.value}/#person`,
	name: "Edi Gabriel",
	url: `${siteBaseUrl.value}/`,
	jobTitle: "Product Designer e Front-End Developer",
	sameAs: socialProfiles,
	email: "mailto:edigabrielcontato@gmail.com",
}));

const websiteSchema = computed(() => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${siteBaseUrl.value}/#website`,
	url: `${siteBaseUrl.value}/`,
	name: "Edi Gabriel",
	inLanguage: "pt-BR",
	publisher: {
		"@id": `${siteBaseUrl.value}/#person`,
	},
}));

useSeoMeta({
	ogType: "website",
	ogSiteName: "Edi Gabriel",
	ogLocale: "pt_BR",
	twitterCard: "summary_large_image",
	robots: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
});

useHead(() => ({
	link: [{ rel: "canonical", href: canonicalUrl.value }],
	meta: [
		{ property: "og:url", content: canonicalUrl.value },
		{ property: "og:image", content: defaultOgImageUrl.value },
		{ name: "twitter:image", content: defaultOgImageUrl.value },
	],
	script: [
		{
			key: "schema-person",
			type: "application/ld+json",
			children: JSON.stringify(personSchema.value),
		},
		{
			key: "schema-website",
			type: "application/ld+json",
			children: JSON.stringify(websiteSchema.value),
		},
	],
}));
</script>

<template>
  <div>
    <Header/>
    <NuxtPage/>
  </div>
</template>
