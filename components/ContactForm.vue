<template>
  <div class="p-6 bg-gray-800 rounded-lg shadow-lg">
    <h2 class="text-xl font-bold text-white">Contact Me</h2>
    <form @submit.prevent="submitForm" class="mt-4">
      <input
        v-model="name"
        type="text"
        placeholder="Your Name"
        class="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        required
      />
      <input
        v-model="email"
        type="email"
        placeholder="Your Email"
        class="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        required
      />
      <textarea
        v-model="message"
        placeholder="Your Message"
        class="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        required
      ></textarea>
      <button
        type="submit"
        class="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
  alert(`Thanks, ${name.value}! Your message has been sent.`);
  name.value = "";
  email.value = "";
  message.value = "";
};
</script>
