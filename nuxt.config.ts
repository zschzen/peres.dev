import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Leandro's Things", // default fallback title
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
    "@nuxt/scripts",
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

  $production: {
    scripts: {
      registry: {
        umamiAnalytics: {
          websiteId: "dfa1ff7c-365d-477a-b347-3ac83695d67b",
        },
      },
    },
  },
});
