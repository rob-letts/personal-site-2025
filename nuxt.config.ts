export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/eslint'
    ],
    eslint: {
    config: {
      stylistic: true // <---
    }
  }
})

// <title>Rob Letts Dev</title>
  // <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕</text></svg>" />