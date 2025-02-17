<template>
  <div class="p-10 text-center">
    <h2 class="text-4xl font-bold text-white">Nuxt Portfolio</h2>
    <p class="text-gray-300 mt-4">Smartphone Parking Log Application</p>

    <div class="mt-6 space-x-4">
      <a
        href="https://github.com/yourusername/nuxt-portfolio"
        target="_blank"
        class="text-blue-400 hover:underline"
        >GitHub</a
      >
      <a
        href="https://your-portfolio-demo.com"
        target="_blank"
        class="text-blue-400 hover:underline"
        >Live Demo</a
      >
    </div>

    <NuxtLink
      to="/projects"
      class="mt-6 inline-block text-blue-400 hover:underline"
    >
      Back to Projects
    </NuxtLink>
  </div>
</template>
