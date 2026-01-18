<template>
  <div
    class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-white"
  >
    <h1
      class="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4"
    >
      Projects
    </h1>

    <h3
      class="text-sm sm:text-base text-gray-300 text-center md:text-left max-w-2xl mx-auto md:mx-0"
    >
      Showcase portfolio featuring my developed projects:
    </h3>
    <div
      class="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6"
    >
      <button
        @click="activeFilter = 'all'"
        class="px-4 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base"
        :class="activeFilter === 'all' ? 'bg-blue-500' : 'bg-gray-700'"
      >
        All
      </button>

      <button
        @click="activeFilter = 'web'"
        class="px-4 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base"
        :class="activeFilter === 'web' ? 'bg-blue-500' : 'bg-gray-700'"
      >
        Web Based Apps
      </button>

      <button
        @click="activeFilter = 'hardware'"
        class="px-4 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base"
        :class="activeFilter === 'hardware' ? 'bg-blue-500' : 'bg-gray-700'"
      >
        Physical / Hardware Projects
      </button>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8"
    >
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
