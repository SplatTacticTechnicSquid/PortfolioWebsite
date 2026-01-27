<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Learning & Articles</h1>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Technical write-ups, seminar materials, and things I’ve learned or
        taught along the way.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <LearningCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </section>
</template>

<script setup>
import LearningCard from "@/components/LearningCard.vue";

const articles = [
  {
    id: "buffer-overflow",
    title: "Understanding Buffer Overflow",
    excerpt:
      "A practical introduction to buffer overflow, stack memory, and why it matters.",
    category: "Security",
    level: "Intermediate",
    image: "/images/learning/buffer-overflow.jpg",
  },
  {
    id: "blockchain-basics",
    title: "Blockchain Fundamentals",
    excerpt:
      "Wallets, tokens, NFTs, and smart contracts explained using Cardano.",
    category: "Blockchain",
    level: "Beginner",
    image: "/images/learning/blockchain.jpg",
  },
];
</script>
