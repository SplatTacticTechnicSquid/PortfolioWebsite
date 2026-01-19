<template>
  <footer class="w-full bg-gray-900 text-gray-400 text-center py-4">
    <p class="text-sm">
      &copy; {{ currentYearValue }} Raditya Rifqi Pratama | Built with
      <span><Icon name="heroicons-outline:heart" /></span> in Nuxt
      <span> <Icon name="logos:nuxt-icon" /> </span>
    </p>
    <div class="mt-2 flex justify-center gap-4">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        class="hover:text-white"
        >GitHub</a
      >
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        class="hover:text-white"
        >LinkedIn</a
      >
      <a href="mailto:radityaprtm2002@gmail.com" class="hover:text-white"
        >Email</a
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const currentYearValue = computed(() => new Date().getFullYear());
</script>
