// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const directusDomain = (() => {
	try {
		const url = process.env.DIRECTUS_URL || "";
		return url ? new URL(url).hostname : "";
	} catch {
		return "";
	}
})();

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxt/image", "shadcn-nuxt", "motion-v/nuxt"],
	ssr: true,
	runtimeConfig: {
		directusUrl: process.env.DIRECTUS_URL || "",
		directusToken: process.env.DIRECTUS_TOKEN || "",
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://edigabriel.com.br",
			defaultOgImage: process.env.NUXT_PUBLIC_OG_IMAGE || "/og-image.png",
		},
	},
	nitro: {
		preset: "node-server", // Para servidor Node.js
	},
	// nitro: {
	//   experimental: {
	//     wasm: true
	//   }
	// },
	app: {
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
		head: {
			title: "Edi Gabriel - Product Designer e Front-End Developer",
			htmlAttrs: {
				lang: "pt-br",
			},
			meta: [
				{
					name: "description",
					content:
						"Portfólio de Edi Gabriel, Product Designer e Front-End Developer com cases de UX, UI e desenvolvimento de produtos digitais.",
				},
				{
					name: "robots",
					content:
						"index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
				},
			],
			link: [
				{ rel: "icon", type: "image/png", href: "/favicon.png" },
				{
					rel: "preload",
					href: "/fonts/chillax/Chillax-Variable.woff2",
					as: "font",
					type: "font/woff2",
					crossorigin: "anonymous",
				},
			],
		},
	},
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},
	image: {
		quality: 80,
		format: ["webp"],
		domains: [directusDomain].filter(Boolean),
	},
	css: ["~/assets/css/tailwind.css"],
	vite: {
		plugins: [tailwindcss()],
	},
});
