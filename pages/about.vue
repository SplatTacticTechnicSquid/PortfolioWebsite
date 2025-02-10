<template>
  <div class="max-w-6xl mx-auto px-6 py-10">
    <h1 class="text-4xl font-bold text-center">About Me</h1>
    <p class="text-center text-gray-300 mt-4">
      I'm a full-stack developer with experience in Vue.js, Nuxt.js, Next.js,
      and backend APIs.
    </p>

    <div class="mt-10 pl-0 md:pl-2.5 lg:pl-4">
      <p class="text-white font-mono text-lg">> $ Whoami</p>
    </div>
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
