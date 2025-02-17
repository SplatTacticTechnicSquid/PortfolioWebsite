<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6"
  >
    <!-- Animated Error Code -->
    <div class="relative">
      <h1 class="text-9xl font-extrabold tracking-widest text-red-500 glitch">
        {{ error.statusCode }}
      </h1>
      <p class="text-4xl mt-2 font-bold text-gray-200">Oops...</p>
      <p class="mt-2 text-lg text-gray-400 font-mono">{{ error.message }}</p>
    </div>

    <!-- Cool Glass Effect Box -->
    <div
      class="mt-6 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg shadow-lg animate-fade-in"
    >
      <p class="text-lg text-gray-300">
        Something went wrong! Let's get you back home.
      </p>
    </div>

    <!-- Go Home Button -->
    <button
      @click="goHome"
      class="mt-6 flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all duration-300"
    >
      <NuxtIcon name="home" class="w-6 h-6" />
      Take me home
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps(["error"]);
const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
/* Glitch Effect */
@keyframes glitch {
  0% {
    text-shadow: 2px 2px red, -2px -2px blue;
  }
  25% {
    text-shadow: -2px -2px red, 2px 2px blue;
  }
  50% {
    text-shadow: 2px -2px red, -2px 2px blue;
  }
  75% {
    text-shadow: -2px 2px red, 2px -2px blue;
  }
  100% {
    text-shadow: 2px 2px red, -2px -2px blue;
  }
}

.glitch {
  animation: glitch 1s infinite;
}

/* Fade-in Effect */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-in-out;
}
</style>
