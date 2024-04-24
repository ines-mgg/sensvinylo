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
  site: {
    url: "https://sensvinylo-store.com/",
    name: "Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France",
    defaultLocale: "fr",
    trailingSlash: true,
  },
  sitemap: {
    urls: [
      { loc: "/vinyle/1-sabrina-espresso" },
      { loc: "/vinyle/2-lana-ocean-blvd" },
      { loc: "/vinyle/3-aurora-heart" },
      { loc: "/vinyle/4-booba-ae" },
      { loc: "/vinyle/5-zayn-room" },
      { loc: "/vinyle/6-amy-back-black" },
      { loc: "/vinyle/7-olivia-guts" },
      { loc: "/vinyle/8-hit-me-hard" },
      { loc: "/vinyle/9-the-weeknd-one-of-girls-popular" },
      { loc: "/vinyle/10-ariana-positions" },
      { loc: "/vinyle/11-taylor-fearless" },
      { loc: "/vinyle/12-rihanna-unapologetic" },
      { loc: "/vinyle/13-lady-gaga-chromatica" },
      { loc: "/vinyle/14-katy-one-of-the-boys" },
      { loc: "/vinyle/15-nicki-pink-friday-2" },
      { loc: "/vinyle/16-queen-innuendo" },
      { loc: "/vinyle/17-beatles-abbey-road" },
      { loc: "/vinyle/18-kendrick-damn" },
      { loc: "/vinyle/19-drake-take-care" },
      { loc: "/vinyle/20-eminem-curtain-call" },
      { loc: "/vinyle/21-jcole-cole-world" },
      { loc: "/vinyle/22-lil-wayne-carter-iii" },
      { loc: "/vinyle/23-snoop-dogg-rhythm-gangsta" },
      { loc: "/vinyle/24-50-cent-rich-die" },
      { loc: "/blog/1-vinyle-phenomene-mondial" },
      { loc: "/blog/2-vinyles-essentiels" },
    ],
  },
  robots: {},
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
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/seo"],
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/error-handler.ts"],
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },
});