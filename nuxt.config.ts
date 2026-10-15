// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import { projects } from "./data/portfolio";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  telemetry: false,

  nitro: {
    prerender: {
      routes: ["/", "/about", "/contact", "/projects", ...projects.map(project => `/projects/project_details/${project.id}`)],
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": resolve(__dirname, "./"),
        "@": resolve(__dirname, "./"),
      },
    },
  },

  css: ["~/assets/css/main.css"],
});
