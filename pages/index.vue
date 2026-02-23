<template>
  <main>
    <section class="min-h-[85vh] flex items-center pt-16 md:pt-0">
      <div
        class="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between w-full px-4 sm:px-6 text-white gap-10"
      >
        <!-- LEFT TEXT -->
        <div class="text-center md:text-left">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">
            Hi, I'm <span class="text-green-400">Raditya Rifqi Pratama</span>
          </h1>

          <h2 class="text-xl sm:text-2xl md:text-3xl mt-2 font-semibold">
            Creative Developer
          </h2>

          <p class="text-gray-300 mt-4 max-w-xl mx-auto md:mx-0">
            I craft meaningful digital experiences whether it is web
            applications, electronics and IoT systems. With strong problem
            solving and practical electronics and instrumentation background, I
            have a passion of translating ideas into real functioning
            prototypes.
          </p>

          <div
            class="flex flex-wrap justify-center md:justify-start gap-4 mt-6"
          >
            <NuxtLink
              to="https://drive.google.com/file/d/1ccLY2tCc15WVbjFE1n052LZXc70F1N1w/view?usp=sharing"
              download
              class="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
              target="_blank"
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
        <div class="block md:block rounded-3xl border-4 border-green-400 p-3">
          <!-- <img src="/me.png" class="rounded-2xl w-[380px]" /> -->
          <NuxtImg
            src="/images/profile/myself.png"
            width="300"
            format="webp"
            class="rounded-lg select-none pointer-events-none"
            draggable="false"
          />
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto py-16 px-4">
      <h2 class="text-3xl font-semibold mb-12 text-white text-center">
        Experience
      </h2>

      <!-- TIMELINE WRAPPER -->
      <div class="relative">
        <!-- DESKTOP CENTER LINE -->
        <div
          class="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-600"
        ></div>

        <!-- MOBILE LEFT LINE -->
        <div
          class="md:hidden absolute left-4 top-0 h-full w-px bg-gray-600"
        ></div>

        <!-- ITEM 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative">
          <!-- DATE + ROLE -->
          <div class="pl-12 md:pl-0 md:text-right md:pr-12 select-none">
            <p class="text-sm text-gray-400">2024 - Present</p>
            <h3 class="font-semibold text-white">Junior Programmer</h3>
          </div>

          <!-- COMPANY + DESC -->
          <div class="pl-12 select-none">
            <h3 class="font-semibold text-white">
              PT. SIGMA CIPTA CARAKA (TELKOMSIGMA)
            </h3>
            <p class="text-sm text-gray-400 mb-2">Yogyakarta, Indonesia</p>
            <p class="text-gray-300">
              Junior Web Developer, Front-end role and API integration focused
            </p>
          </div>
        </div>

        <!-- ITEM 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative">
          <div class="pl-12 md:pl-0 md:text-right md:pr-12 select-none">
            <p class="text-sm text-gray-400">2024 - 2024</p>
            <h3 class="font-semibold text-white">ICT Teacher</h3>
          </div>

          <div class="pl-12 select-none">
            <h3 class="font-semibold text-white">
              Madrasah Muallimin Muhammadiyah
            </h3>
            <p class="text-sm text-gray-400 mb-2">Sedayu, Indonesia</p>
            <p class="text-gray-300">
              Educator, taught Information Communication Technology subject to
              highschool students
            </p>
          </div>
        </div>

        <!-- ITEM 3 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div class="pl-12 md:pl-0 md:text-right md:pr-12 select-none">
            <p class="text-sm text-gray-400">2022 - 2023</p>
            <h3 class="font-semibold text-white">Student / Intern</h3>
          </div>

          <div class="pl-12 select-none">
            <h3 class="font-semibold text-white">
              Universitas Gadjah Mada / Geoseismal Research Center
            </h3>
            <p class="text-sm text-gray-400 mb-2">Sleman, Indonesia</p>
            <p class="text-gray-300">
              Hardware and Instrumentation Developer internship. Focused on
              geophysics research and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
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
