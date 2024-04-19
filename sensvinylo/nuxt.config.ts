// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {},
  $development: {
    devtools: { enabled: true },
    devServer: { host: "0.0.0.0" },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "fr" },
    },
  },
  image: {
    quality: 100,
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  modules: ["@nuxt/ui", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/error-handler.ts"],
});