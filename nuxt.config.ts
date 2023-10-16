export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  modules: ['nuxt-simple-sitemap']
})