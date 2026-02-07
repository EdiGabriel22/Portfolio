<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import Hero from "~/components/home/Hero.vue";
import Projects from "~/components/projects/Projects.vue";

const siteBaseUrl = useSiteBaseUrl();

useSeoMeta({
	title: "Product Designer e Front-End Developer",
	description:
		"Portfólio de Edi Gabriel com principais cases de Product Design, UI/UX e desenvolvimento front-end para produtos digitais.",
	ogTitle: "Product Designer e Front-End Developer",
	ogDescription:
		"Conheça os principais trabalhos de Edi Gabriel em design de produto e desenvolvimento front-end.",
	twitterTitle: "Product Designer e Front-End Developer",
	twitterDescription:
		"Principais cases e projetos de Edi Gabriel em Product Design e Front-End.",
});

const homePageSchema = computed(() => ({
	"@context": "https://schema.org",
	"@type": "ProfilePage",
	"@id": `${siteBaseUrl.value}/#webpage`,
	url: `${siteBaseUrl.value}/`,
	name: "Edi Gabriel - Product Designer e Front-End Developer",
	mainEntity: {
		"@id": `${siteBaseUrl.value}/#person`,
	},
}));

useHead(() => ({
	script: [
		{
			key: "schema-home-profile",
			type: "application/ld+json",
			children: JSON.stringify(homePageSchema.value),
		},
	],
}));
</script>

<template>
    <div class="relative">
        <Hero/>
        <Projects/>
        <Footer/>
    </div>
</template>
