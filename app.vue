<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
