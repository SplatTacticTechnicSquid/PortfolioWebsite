<template>
  <div class="max-w-6xl mx-auto px-6 py-10">
    <h1 class="text-4xl font-bold text-center">About Me</h1>
    <p class="text-center text-gray-300 mt-4">
      I'm a full-stack developer with experience in
      <span class="text-green-400 font-bold">Vue.js</span>,
      <span class="text-blue-400 font-bold">Nuxt.js</span>, and
      <span class="text-yellow-400 font-bold">Next.js</span>, and backend APIs.
    </p>

    <!-- Add a terminal section to make it more aesthetic -->

    <!-- Terminal Section -->
    <div class="mt-10 w-full max-w-2xl">
      <div
        class="bg-black/80 text-green-400 font-mono text-lg p-5 rounded-lg border-l-4 border-green-500"
      >
        <p>
          <span class="text-green-400">> $</span>
          <span> Whoami</span><span class="animate-blink">_</span>
        </p>
      </div>
    </div>

    <div class="mt-10 pl-0 md:pl-2.5 lg:pl-4">
      <p class="text-white font-mono text-lg">
        > $ {{ typedTextHello }}<span class="animate-blink">_</span>
      </p>
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

const helloFromRaditya =
  "Hello I am Raditya, an aspiring interdisciplinary techpreneur";

const typedTextHello = ref("");

const typeText = async () => {
  for (let i = 0; i <= helloFromRaditya.length; i++) {
    setTimeout(() => {
      typedTextHello.value = helloFromRaditya.slice(0, i);
    }, i * 100); //100ms
  }
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
