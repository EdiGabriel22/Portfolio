// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["shadcn-nuxt", "motion-v/nuxt"],
	ssr: true,
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
			title: "Edi Gabriel - Product Designer",
			htmlAttrs: {
				lang: "pt-br",
			},
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
	css: ["~/assets/css/tailwind.css"],
	vite: {
		plugins: [tailwindcss()],
	},
});
