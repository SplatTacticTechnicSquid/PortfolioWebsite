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
    link: "/projects/projects_detail/nuxt_portfolio",
  },
  {
    id: "iot-weatherstation",
    name: "Weather Station Based on Arduino",
    description:
      "Weather Station using Arduino UNO with DHT22 and MQ-2 Sensors",
    link: "/projects/projects_detail/iot-weatherstation",
  },
  {
    id: "smartparking-logger",
    name: "Smartphone Parking Log Application",
    description: "",
    link: "/projects/projects_detail/smartparking-logger",
  },
  {
    id: "intelligent-iot-smokedetector",
    name: "Intelligent IOT Smoke Detector",
    description: "Intelligent Smoke Detector based on IOT",
    link: "/projects/intelligent-iot-smokedetector",
  },
];
</script>
