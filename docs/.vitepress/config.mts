import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs-appweb-trpr02",
  description: "Revue de code du travail pratique 02 de Émile Lafleur et Marek Boudreau",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ]
  }
})
