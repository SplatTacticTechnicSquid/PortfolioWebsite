<template>
  <div class="p-10 text-center space-y-6">
    <h1 class="text-4xl font-bold text-white">Get in Touch</h1>
    <ContactForm />

    <div class="social-media mt-10">
      <h2 class="text-2xl font-semibold text-white mb-4">
        Connect with me on social media
      </h2>
      <div class="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          class="text-white hover:text-blue-500 text-3xl"
        >
          <Icon icon="mdi:linkedin" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          class="text-white hover:text-pink-500 text-3xl"
        >
          <Icon icon="mdi:instagram" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          class="text-white hover:text-blue-600 text-3xl"
        >
          <Icon icon="mdi:facebook" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContactForm from "@/components/ContactForm.vue";
import { Icon } from "@iconify/vue";
</script>
