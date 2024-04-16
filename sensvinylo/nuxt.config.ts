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
      
    },
  },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/error-handler.ts"],
});
