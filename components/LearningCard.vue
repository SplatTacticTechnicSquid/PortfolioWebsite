<template>
  <NuxtLink
    :to="`/learning/learning-details/${article.id}`"
    class="block rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg overflow-hidden hover:scale-[1.02] transition"
  >
    <!-- Image -->
    <div class="h-40 bg-gray-700 overflow-hidden">
      <NuxtImg
        :src="article.image || '/images/learning/placeholder.png'"
        :alt="article.title"
        class="w-full h-full object-cover"
        format="webp"
        loading="lazy"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">
        {{ article.title }}
      </h3>

      <p class="text-sm text-gray-400 mb-4">
        {{ article.excerpt }}
      </p>

      <div class="flex items-center justify-between text-sm text-gray-400">
        <span>{{ article.level }}</span>
        <span class="px-3 py-1 rounded-full bg-green-500/10 text-green-400">
          {{ article.category }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
