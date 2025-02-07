<template>
  <div class="p-10">
    <h1 class="text-4xl font-bold text-white text-center">Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";

const projects = [
  {
    id: "nuxt-portfolio",
    name: "Nuxt Portfolio",
    description: "A fast Nuxt 3 portfolio",
    link: "/projects/nuxt-portfolio",
  },
  {
    id: "vue-dashboard",
    name: "Vue Dashboard",
    description: "An admin dashboard built with Vue.js",
    link: "/projects/vue-dashboard",
  },
];
</script>
