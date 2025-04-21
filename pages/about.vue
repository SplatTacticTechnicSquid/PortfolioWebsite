<template>
  <main class="relative min-h-screen bg-cover bg-center bg-fixed">
    <!-- Background Overlay 
     style="background-image: url('/images/about-bg.jpg')"
         <div class="absolute inset-0 bg-black/70"></div>
-->

    <div class="relative z-10 max-w-5xl mx-auto px-6 py-12 text-white">
      <!-- Header -->
      <header class="text-center">
        <h1 class="text-6xl font-extrabold tracking-wide">About Me</h1>
        <p class="text-gray-300 text-lg mt-4">
          I am a
          <span class="text-green-400 font-bold">full-stack developer</span>
          passionate about <span class="text-blue-400 font-bold">Vue.js</span>,
          <span class="text-yellow-400 font-bold">Next.js</span>, and backend
          development.
        </p>
      </header>

      <!-- Terminal Section -->
      <section class="mt-12 w-full max-w-2xl mx-auto">
        <div class="bg-gray-900 rounded-t-lg flex items-center px-4 py-2">
          <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div
          class="bg-black text-green-400 font-mono text-lg p-6 rounded-b-lg shadow-lg border border-green-500"
        >
          <p>
            <span class="text-green-400">> $</span> whoami<span
              class="animate-blink"
              >_</span
            >
          </p>
          <p class="mt-2">
            <span class="text-green-400">> $</span>
            <span class="font-bold text-green-300">{{ typedTextHello }}</span
            ><span class="animate-blink">_</span>
          </p>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="mt-16">
        <h2 class="text-4xl font-bold text-center mb-6">My Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            <Icon :name="skill.icon" class="text-4xl mx-auto text-green-400" />
            <p class="mt-2 text-lg">{{ skill.name }}</p>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="mt-16">
        <h2 class="text-4xl font-bold text-center mb-6">Experience</h2>
        <article
          v-for="experience in experiences"
          :key="experience.company"
          class="mb-6 p-6 bg-white/10 rounded-lg"
        >
          <h3 class="text-2xl font-bold text-yellow-400">
            {{ experience.role }}
          </h3>
          <p class="text-lg text-gray-300">{{ experience.company }}</p>
          <p class="mt-2">{{ experience.description }}</p>
        </article>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

useHead({
  title: "About Me - Raditya",
  meta: [
    {
      name: "description",
      content: "Learn more about Raditya, a passionate full-stack developer.",
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
          setTimeout(typeText, 2000);
        }
      } else {
        if (index > 0) {
          typedTextHello.value = helloFromRaditya.substring(0, index - 1);
          index--;
          typeText();
        } else {
          isDeleting = false;
          setTimeout(typeText, 1000);
        }
      }
    },
    isDeleting ? 50 : 100
  );
};

onMounted(() => {
  typeText();
});

// Skills Data
const skills = ref([
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Nuxt.js", icon: "logos:nuxt-icon" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Golang", icon: "logos:go" },
  { name: "Docker", icon: "logos:docker-icon" },
]);

// Experience Data
const experiences = ref([
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    description: "Worked on various web apps using Vue, Nuxt, and Next.js.",
  },
  {
    role: "Software Intern",
    company: "XYZ Tech",
    description: "Built REST APIs and integrated Vue.js frontend.",
  },
]);
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
