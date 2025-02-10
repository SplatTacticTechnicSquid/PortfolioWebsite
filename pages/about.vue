<template>
  <div class="p-10 text-center">
    <h2 class="text-4xl font-bold text-white">About Me</h2>
    <p class="text-gray-300 mt-4">
      I'm a full-stack developer with experience in Vue, Nuxt, and backend APIs.
    </p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Portfolio About Me",
  meta: [
    {
      name: "About Me Page",
      content: "An insight to my profile",
    },
  ],
});
</script>
