<template>
  <article class="max-w-4xl mx-auto px-6 py-16">
    <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        {{ article.title }}
      </h1>

      <p class="text-gray-400 max-w-2xl">
        {{ article.description }}
      </p>

      <div class="flex gap-4 mt-6 text-sm text-gray-400">
        <span>📘 {{ article.category }}</span>
        <span>⚙️ {{ article.level }}</span>
        <span>🗓 {{ article.date }}</span>
      </div>
    </header>

    <NuxtImg
      v-if="article.image"
      :src="article.image"
      class="rounded-2xl mb-12 w-full object-cover"
      format="webp"
      loading="lazy"
    />

    <section class="prose prose-invert max-w-none">
      <component :is="article.component" />
    </section>
  </article>
</template>

<script setup>
import { defineAsyncComponent, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const articles = {
  "buffer-overflow": {
    title: "Understanding Buffer Overflow",
    description:
      // "Learn how buffer overflow works, how it affects memory, and why it is dangerous.",
      "Learn what is buffer overflow, how computer memory works and why it can cause security issues",
    category: "Security",
    level: "Intermediate",
    date: "2024",
    image: "/images/learning/buffer-overflow.jpg",
    component: defineAsyncComponent(() => import("./buffer-overflow.vue")),
  },

  "blockchain-basics": {
    title: "Blockchain Fundamentals",
    description:
      "An introduction to wallets, tokens, NFTs, and smart contracts in Cardano.",
    category: "Blockchain",
    level: "Beginner",
    date: "2024",
    image: "/images/learning/blockchain.jpg",
    // component: defineAsyncComponent(() => import("./blockchain-basics.vue")),
  },
};

const article = computed(() => articles[route.params.id]);
</script>
