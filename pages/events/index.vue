<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Events & Activities</h1>
      <p class="text-gray-400 max-w-2xl mx-auto">
        A collection of events, workshops, teaching sessions, and activities
        I’ve been involved in.
      </p>
    </div>

    <!-- Events Grid -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="event in events"
        :key="event.title"
        class="rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg overflow-hidden hover:scale-[1.02] transition"
      >
        <!-- Image -->
        <div class="h-40 bg-gray-700 overflow-hidden">
          <img
            :src="event.image"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  {
    title: "SDLC Seminar",
    description: "Practical Approach to software vulnerability",
    date: "2025",
    type: "Workshop",
    image: "/images/events/SDLC.jpeg",
  },

  {
    title: "Blockchain Workshop",
    description:
      "Introduction to blockchain fundamentals for university students.",
    date: "2024",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
  },
  {
    title: "PartTime ICT Teaching ",
    description:
      "Teaching algorithms and basic programming logic using Scratch and Code.org.",
    date: "2024",
    type: "Teaching",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];
</script>
