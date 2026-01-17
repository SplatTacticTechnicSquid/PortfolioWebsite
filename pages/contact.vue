<template>
  <div class="min-h-[70vh] flex flex-col justify-center items-center px-6">
    <h1 class="text-4xl font-bold text-white">Get in Touch</h1>

    <p class="text-gray-300 mt-3 max-w-2xl text-center">
      Whether it's a project idea, collaboration, or just a friendly hello. Feel
      free to reach out. I’d love to connect!
    </p>

    <!-- EMAIL CARD -->
    <div
      class="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 text-center shadow-xl"
    >
      <h2 class="text-2xl font-semibold text-green-400">Email Me</h2>
      <p class="text-gray-300 mt-2">
        email me at radityaprtm2002@gmail.com or click on the button below:
      </p>
      <a
        href="mailto:radityaprtm2002@email.com"
        class="inline-block mt-4 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 font-semibold"
      >
        Send Email
      </a>
    </div>

    <!-- SOCIAL SECTION -->
    <div class="mt-12 text-center">
      <h2 class="text-2xl font-semibold text-white">Social Media</h2>
      <p class="text-gray-400 mt-2">Let’s connect and say hi 👋</p>

      <div class="flex justify-center gap-8 mt-6">
        <a
          class="flex items-center gap-2 hover:text-blue-400 transition"
          href="https://linkedin.com/in/raditya-rifqi-pratama"
          target="_blank"
        >
          <Icon icon="mdi:linkedin" class="text-3xl" />
          <span class="text-gray-300 text-sm">@raditya-rifqi-pratama</span>
        </a>

        <a
          class="flex items-center gap-2 hover:text-pink-500 transition"
          href="https://github.com/radityaprtm"
          target="_blank"
        >
          <Icon icon="mdi:github" class="text-3xl" />
          <span class="text-gray-300 text-sm">@radityaprtm</span>
        </a>
        <a
          class="flex items-center gap-2 hover:text-pink-500 transition"
          href="https://discordapp.com/users/990147835091623956"
          target="_blank"
        >
          <Icon icon="mdi:discord" class="text-3xl" />
          <span class="text-gray-300 text-sm">@discoradit2257</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
