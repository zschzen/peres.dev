import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Leandro’s corner",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        // Primary meta tags
        {
          name: "description",
          content:
            "Leandro’s Link Hub – All the essential links in one place: resume, portfolio, blog posts, GitHub projects, and contact. Perfect for recruiters and collaborators to quickly explore my work.",
        },
        {
          name: "keywords",
          content:
            "Leandro Corner, link hub, linktree, portfolio links, blog posts, C++ game engine, MOS6502 emulator, TypeScript projects, SDL2 demos, contact",
        },
        { name: "author", content: "Leandro" },
        { name: "robots", content: "index, follow" },

        // Open Graph / Facebook
        { property: "og:title", content: "Leandro’s Link Hub" },
        {
          property: "og:description",
          content:
            "Discover my resume, portfolio, latest blog posts, GitHub repos and more—everything a recruiter or collaborator needs, in one convenient page.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://peres.dev/" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@zschzen" },
        { name: "twitter:title", content: "Leandro’s Link Hub" },
        {
          name: "twitter:description",
          content:
            "Your gateway to my resume, portfolio, blog, and code—designed for recruiters and collaborators.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://peres.dev/" },
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
