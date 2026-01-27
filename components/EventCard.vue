<template>
  <div
    class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg overflow-hidden hover:scale-[1.02] transition"
  >
    <!-- Image -->
    <div class="h-40 bg-gray-700 overflow-hidden">
      <img
        :src="event.image || '/images/events/placeholder.png'"
        :alt="event.title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
      <p class="text-sm text-gray-400 mb-4">{{ event.description }}</p>

      <div class="flex items-center justify-between text-sm text-gray-400">
        <span>{{ event.date }}</span>
        <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
          {{ event.type }}
        </span>
        <NuxtLink
          :to="event.link"
          class="text-blue-400 inline-block hover:underline hover:text-white transition"
        >
          View Event
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>
