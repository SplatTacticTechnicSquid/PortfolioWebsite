<template>
  <div class="relative z-10 max-w-5xl mx-auto px-6 py-12 text-white">
    <h1 class="text-4xl font-bold text-white text-center mb-4">Projects</h1>

    <h3>Showcase portfolio featuring my developed projects:</h3>
    <div class="flex gap-4 mt-6">
      <button
        @click="activeFilter = 'all'"
        class="px-4 py-2 rounded-lg"
        :class="activeFilter === 'all' ? 'bg-blue-500' : 'bg-gray-700'"
      >
        All
      </button>

      <button
        @click="activeFilter = 'web'"
        class="px-4 py-2 rounded-lg"
        :class="activeFilter === 'web' ? 'bg-blue-500' : 'bg-gray-700'"
      >
        Web Based Apps
      </button>

      <button
        @click="activeFilter = 'hardware'"
        class="px-4 py-2 rounded-lg"
        :class="activeFilter === 'hardware' ? 'bg-blue-500' : 'bg-gray-700'"
      >
        Physical / Hardware Projects
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard.vue";

const activeFilter = ref("all");

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") return projects;
  return projects.filter((p) => p.type === activeFilter.value);
});

const projects = [
  {
    id: "iot-weatherstation",
    name: "Weather Station Based on Arduino",
    description:
      "Weather Station using Arduino UNO with DHT22 and MQ-2 Sensors",
    link: "/projects/project_details/iot-weatherstation",
    type: "hardware",
  },
  {
    id: "smartparking-logger",
    name: "Smartphone Parking Log Application",
    description: "",
    link: "/projects/project_details/smartparking-logger",
    type: "hardware",
  },
  {
    id: "intelligent-iot-smokedetector",
    name: "Intelligent IOT Smoke Detector",
    description: "Intelligent Smoke Detector based on IOT",
    link: "/projects/project_details/intelligent-iot-smokedetector",
    type: "hardware",
  },
];
</script>
