<template>
  <component :is="event.link ? NuxtLink : 'article'"
    :to="event.link"
    class="block rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg overflow-hidden hover:scale-[1.02] hover:border-blue-400/40 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <!-- Image -->
    <div class="h-40 bg-gray-700 overflow-hidden">
      <NuxtImg
        v-if="event.image" :src="event.image"
        :alt="event.title"
        class="w-full h-full object-cover"
        loading="lazy"
        sizes="sm:100vw md:50vw lg:33vw"
      />
      <div v-else class="h-full grid place-items-center bg-green-500/5 text-green-400 font-mono text-sm" aria-hidden="true">{{ event.type }}</div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 text-white">
        {{ event.title }}
      </h3>

      <p class="text-sm text-gray-400 mb-4 line-clamp-3">
        {{ event.description }}
      </p>

      <div class="flex items-center justify-between text-sm text-gray-400">
        <span>{{ event.date }}</span>

        <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
          {{ event.type }}
        </span>
      </div>
    </div>
  </component>
</template>

<script setup>
import { NuxtLink } from '#components';
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>
