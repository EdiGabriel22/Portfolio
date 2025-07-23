// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt'],
  app: {
    head: {
      title: 'Edi Gabriel - Product Designer',
      htmlAttrs: {
        lang: 'pt-br',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ]
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})