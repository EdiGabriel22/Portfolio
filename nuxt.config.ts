// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		"@nuxtjs/tailwindcss",
		"@vesp/nuxt-fontawesome",
	],

	fontawesome: {
  		suffix: false,
		icons: {
			solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar', 'envelope'],
			regular: ['comment', 'user'],
			brands: ['x-twitter', 'figma', 'github', 'linkedin', 'discord', 'behance'],
		  },
	},

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
