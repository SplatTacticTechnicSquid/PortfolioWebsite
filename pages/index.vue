<template>
  <section class="min-h-[85vh] flex items-center">
    <div
      class="max-w-[1200px] mx-auto flex items-center justify-between w-full px-6 text-white"
    >
      <!-- LEFT TEXT -->
      <div>
        <h1 class="text-5xl font-bold">
          Hi, I'm <span class="text-green-400">Raditya Rifqi Pratama</span>
        </h1>

        <h2 class="text-3xl mt-2 font-semibold">Creative Developer</h2>

        <p class="text-gray-300 mt-4 max-w-xl">
          I craft meaningful digital experiences whether it is web applications,
          electronics and IoT systems. With strong problem solving and practical
          electronics and instrumentation background, I have a passion of
          translating ideas into real functioning prototypes.
        </p>

        <div class="flex gap-4 mt-6">
          <NuxtLink
            to="https://drive.google.com/file/d/1ccLY2tCc15WVbjFE1n052LZXc70F1N1w/view?usp=sharing"
            download
            class="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
          >
            Link to my CV
          </NuxtLink>

          <NuxtLink
            to="https://drive.google.com/file/d/17u3tEcoj_pthjvDSUpYLRXCbL-pK14vC/view?usp=sharing"
            class="bg-blue-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
            target="_blank"
          >
            My Portfolio Presentation
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>

      <!-- RIGHT IMAGE / FRAME -->
      <div class="hidden md:block rounded-3xl border-4 border-green-400 p-3">
        <!-- <img src="/me.png" class="rounded-2xl w-[380px]" /> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "Portfolio Index",
  meta: [
    {
      name: "Home",
      content: "Introduction",
    },
  ],
});
</script>
