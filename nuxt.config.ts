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
      { loc: "/vinyle/sabrina-espresso" },
      { loc: "/vinyle/lana-ocean-blvd" },
      { loc: "/vinyle/aurora-heart" },
      { loc: "/vinyle/booba-ae" },
      { loc: "/vinyle/zayn-room" },
      { loc: "/vinyle/amy-back-black" },
      { loc: "/vinyle/olivia-guts" },
      { loc: "/vinyle/hit-me-hard" },
      { loc: "/vinyle/the-weeknd-one-of-girls-popular" },
      { loc: "/vinyle/ariana-positions" },
      { loc: "/vinyle/taylor-fearless" },
      { loc: "/vinyle/rihanna-unapologetic" },
      { loc: "/vinyle/lady-gaga-chromatica" },
      { loc: "/vinyle/katy-one-of-the-boys" },
      { loc: "/vinyle/nicki-pink-friday-2" },
      { loc: "/vinyle/queen-innuendo" },
      { loc: "/vinyle/beatles-abbey-road" },
      { loc: "/vinyle/kendrick-damn" },
      { loc: "/vinyle/drake-take-care" },
      { loc: "/vinyle/eminem-curtain-call" },
      { loc: "/vinyle/jcole-cole-world" },
      { loc: "/vinyle/lil-wayne-carter-iii" },
      { loc: "/vinyle/snoop-dogg-rhythm-gangsta" },
      { loc: "/vinyle/50-cent-rich-die" },
      { loc: "/vinyle/mika-tete-fleurisse" },
      { loc: "/vinyle/camila-xoxo" },
      { loc: "/vinyle/imagine-loom" },
      { loc: "/vinyle/bon-jovi-forever" },
      { loc: "/vinyle/troye-something-give-each-other" },
      { loc: "/vinyle/kendrick-good-kid-maad-city" },
      { loc: "/vinyle/lady-rain-on-me" },
      { loc: "/vinyle/kendrick-mr-morale" },
      { loc: "/blog/acheteurs-vinyles-ecoutent-ils-vraiment-leurs-disques" },
      { loc: "/blog/fin-abondance-vinyle-reserve-riches" },
      { loc: "/blog/jeunes-achetent-plus-vinyles-boomers" },
      { loc: "/blog/fin-abondance-vinyle-reserve-riches" },
      { loc: "/artist/the-beatles" },
      { loc: "/artist/billie-eilish" },
      { loc: "/artist/queen" },
      { loc: "/artist/sabrina-carpenter" },
      { loc: "/artist/lana-del-rey" },
      { loc: "/artist/ariana-grande" },
      { loc: "/artist/taylor-swift" },
      { loc: "/artist/rihanna" },
      { loc: "/artist/lady-gaga" },
      { loc: "/artist/katy-perry" },
      { loc: "/artist/nicki-minaj" },
      { loc: "/artist/olivia-rodrigo" },
      { loc: "/artist/aurora" },
      { loc: "/artist/booba" },
      { loc: "/artist/zayn" },
      { loc: "/artist/amy-winehouse" },
      { loc: "/artist/the-weeknd" },
      { loc: "/artist/kendrick-lamar" },
      { loc: "/artist/drake" },
      { loc: "/artist/eminem" },
      { loc: "/artist/j-cole" },
      { loc: "/artist/lil-wayne" },
      { loc: "/artist/snoop-dogg" },
      { loc: "/artist/50-cent" },
      { loc: "/artist/mika" },
      { loc: "/artist/camila-cabello" },
      { loc: "/artist/imagine-dragons" },
      { loc: "/artist/bon-jovi" },
      { loc: "/artist/troye-sivan" },
    ],
  },

  robots: {},

  image: {
    // quality: 100,
    // format: ["webp"],
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   "2xl": 1536,
    // },
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@vite-pwa/nuxt",
  ],

  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/error-handler.ts"],

  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },

  pwa: {
    manifest: {
      name: "Sensvinylo - Votre Disquaire de Vinyles à Paris et en Ile-de-France",
      short_name: "Sensvinylo",
      description:
        "Sensvinylo, le paradis des vinyles à Paris et en Ile-de-France. Découvrez notre large choix de vinyles neufs et d'occasion, tous styles confondus. Les vinyles de vos artistes préférés en exclusivité chez Sensvinylo.",
      icons: [
        {
          src: "logo-64x64.webp",
          sizes: "64x64",
          type: "image/webp",
        },
        {
          src: "logo-120x120.webp",
          sizes: "120x120",
          type: "image/webp",
        },
        {
          src: "logo-144x144.webp",
          sizes: "144x144",
          type: "image/webp",
        },
        {
          src: "logo-152x152.webp",
          sizes: "152x152",
          type: "image/webp",
        },
        {
          src: "logo-192x192.webp",
          sizes: "192x192",
          type: "image/webp",
        },
        {
          src: "logo-384x384.webp",
          sizes: "384x384",
          type: "image/webp",
        },
        {
          src: "logo-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "logo-512x512.webp",
          sizes: "512x512",
          type: "image/webp",
        },
        {
          src: "logo-512x512.webp",
          sizes: "512x512",
          type: "image/webp",
          purpose: "any",
        },
        {
          src: "logo-512x512.webp",
          sizes: "512x512",
          type: "image/webp",
          purpose: "maskable",
        },
      ],
      theme_color: "#e97c2f",
      background_color: "#000000",
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
    injectRegister: "auto",
    registerType: "autoUpdate",
    injectManifest: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
    },
  },

  compatibilityDate: "2024-11-03",
});