<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Navbar />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

// seo optimization for app.vue main
useHead({
  titleTemplate: (title) =>
    title ? `${title} | Raditya Pratama` : "Raditya Pratama's Portfolio",
  meta: [
    {
      name: "Professional Portfolio created by Raditya",
      content: "Talent showcases and experience from my journey",
    },
  ],

  script: [{ innerHTML: "console.log('Hello I am Raditya')" }],
});
</script>
