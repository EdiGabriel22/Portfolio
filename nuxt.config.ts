// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	tailwindcss: {
		configPath: "tailwind.config.js",
		cssPath: "./src/css/tailwind.css",
	},
	components: {
		dirs: [
			{
				path: "./src/components",
			},
		],
		global: true,
	}
});
