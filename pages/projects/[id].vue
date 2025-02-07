<template>
  <div class="p-10 text-center">
    <h2 class="text-4xl font-bold text-white">{{ project.name }}</h2>
    <p class="text-gray-300 mt-4">{{ project.description }}</p>
    <NuxtLink
      to="/projects"
      class="mt-6 inline-block text-blue-400 hover:underline"
      >Back to Projects</NuxtLink
    >
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const projects = {
  "nuxt-portfolio": {
    name: "Nuxt Portfolio",
    description: "A fast Nuxt 3 portfolio",
  },
  "vue-dashboard": {
    name: "Vue Dashboard",
    description: "An admin dashboard built with Vue.js",
  },
};
const project = projects[route.params.id] || {
  name: "Project Not Found",
  description: "This project does not exist.",
};
</script>
