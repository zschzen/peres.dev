import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Leandro Peres", // default fallback title
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  srcDir: "src/",

  modules: [
    "@nuxt/eslint",
    "@vesp/nuxt-fontawesome",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  fontawesome: {
    icons: {
    },
  },
});
