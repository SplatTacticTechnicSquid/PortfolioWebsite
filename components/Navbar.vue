<template>
  <nav
    class="w-full sticky top-0 z-50 bg-white/10 rounded-sm backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-white py-4 px-6"
  >
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">Raditya's Portfolio</NuxtLink>

      <!-- Mobile Menu Toggle -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex md:flex-row md:gap-4">
        <div>
          <NuxtLink to="/about" class="hover:text-blue-400">About</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/projects" class="hover:text-blue-400"
            >Projects</NuxtLink
          >
        </div>
        <div>
          <NuxtLink to="/contact" class="hover:text-blue-400">Contact</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/events" class="hover:text-blue-400"
            >Activity & Volunteering</NuxtLink
          >
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-show="menuOpen" class="md:hidden bg-gray-800 mt-2 p-4">
      <NuxtLink to="/about" class="block py-2">About</NuxtLink>
      <NuxtLink to="/projects" class="block py-2">Projects</NuxtLink>
      <NuxtLink to="/contact" class="block py-2">Contact</NuxtLink>
      <NuxtLink to="/events" class="block py-2"
        >Activity & Volunteering</NuxtLink
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);
</script>
