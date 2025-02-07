<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
