<template>
  <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
    <h2 class="text-xl font-bold text-white">{{ project.name }}</h2>
    <p class="text-gray-400 mt-2">{{ project.description }}</p>
    <NuxtLink
      :to="project.link"
      class="text-blue-400 mt-4 inline-block hover:underline"
      >View Project →</NuxtLink
    >
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
