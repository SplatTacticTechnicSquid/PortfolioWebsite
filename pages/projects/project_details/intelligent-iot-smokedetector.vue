<template>
  <div class="p-10 text-center">
    <h2 class="text-4xl font-bold text-white">Nuxt Portfolio</h2>
    <p class="text-gray-300 mt-4">Intelligent IOT Smoke Detector System</p>
    <p class="text-gray-300 mt-4">
      The intelligent IOT system is comprised of several components built such
      as sensing element, microcontroller and wireless module communication unit
      to the computer/mobile device UI dashboard.
    </p>
    <br />
    <p class="text-gray-300 mt-4">
      The dashboard uses Blynk IOT dashboard which is integrated to the ESP32
      module from the IOT software that retrieves the following data:
      <ul>
        <li>
          Temperature
        </li>
        <li>
          Light
          <li>
            Gas concentration
          </li>
        </li>
      </ul>
    </p>
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
