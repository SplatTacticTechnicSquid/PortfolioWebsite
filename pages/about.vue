<template>
  <div class="max-w-5xl mx-auto px-6 py-12">
    <!-- Title -->
    <h1 class="text-5xl font-extrabold text-center text-white">About Me</h1>
    <p class="text-center text-gray-300 mt-4 text-lg">
      I'm a full-stack developer passionate about
      <span class="text-green-400 font-bold">Vue.js</span>,
      <span class="text-blue-400 font-bold">Nuxt.js</span>,
      <span class="text-yellow-400 font-bold">Next.js</span>, and backend APIs.
    </p>

    <!-- Terminal Box -->
    <div class="mt-12 w-full max-w-2xl mx-auto">
      <!-- Terminal Header -->
      <div class="bg-gray-900 rounded-t-lg flex items-center px-4 py-2">
        <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
        <span class="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <!-- Terminal Body -->
      <div
        class="bg-black text-green-400 font-mono text-lg p-6 rounded-b-lg shadow-lg border border-green-500"
      >
        <p>
          <span class="text-green-400">> $</span>
          <span> whoami</span><span class="animate-blink">_</span>
        </p>
        <p class="mt-2">
          <span class="text-green-400">> $</span>
          <span class="font-bold text-green-300">{{ typedTextHello }}</span
          ><span class="animate-blink">_</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Portfolio About Me",
  meta: [
    {
      name: "About Me Page",
      content: "An insight into my profile",
    },
  ],
});

const helloFromRaditya =
  " Hello, I am Raditya, an aspiring interdisciplinary techpreneur.";

const typedTextHello = ref("");
let isDeleting = false;
let index = 0;

const typeText = () => {
  setTimeout(
    () => {
      if (!isDeleting) {
        if (index < helloFromRaditya.length) {
          typedTextHello.value += helloFromRaditya[index];
          index++;
          typeText();
        } else {
          isDeleting = true;
          setTimeout(typeText, 2000); // Pause before deleting
        }
      } else {
        if (index > 0) {
          typedTextHello.value = helloFromRaditya.substring(0, index - 1);
          index--;
          typeText();
        } else {
          isDeleting = false;
          setTimeout(typeText, 1000); // Pause before retyping
        }
      }
    },
    isDeleting ? 50 : 100
  ); // Faster delete speed
};

onMounted(() => {
  typeText();
});
</script>

<style scoped>
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}
</style>
