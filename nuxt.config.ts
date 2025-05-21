import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: "Pages of My Love",
      htmlAttrs: {
        lang: "en",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  routeRules: {
    "/pay/**": { ssr: false },
  },

  modules: [
    // "@nuxtjs/tailwindcss",

    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    families: {
      Caveat: [300, 400, 500, 700],
      "Patrick+Hand": true,
      "Akaya+Kanadaka": [300, 400, 500, 700],
    },
    display: "swap",
  },

  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/main.css",
    "animate.css/animate.min.css",
  ],

  components: [
    {
      global: true,
      path: "~/components",
      pathPrefix: false,
    },
  ],

  vue: {
    runtimeCompiler: true,
  },

  vite: {
    optimizeDeps: {
      include: ["localforage"],
    },
    plugins: [tailwindcss()],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },

  compatibilityDate: "2025-01-17",
});
