<template>
  <section class="max-w-6xl mx-auto px-6 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Activities & Volunteering
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto">
        A collection of events, workshops, teaching sessions, and activities
        I’ve been involved in.
      </p>
    </div>

    <!-- Filters -->
    <div class="flex justify-center gap-3 mb-8 flex-wrap">
      <button @click="activeFilter = 'all'" :class="buttonClass('all')">
        All
      </button>
      <button
        @click="activeFilter = 'Workshop'"
        :class="buttonClass('Workshop')"
      >
        Workshop
      </button>
      <button
        @click="activeFilter = 'Volunteering'"
        :class="buttonClass('Volunteering')"
      >
        Volunteering
      </button>
    </div>

    <!-- Events Grid -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <EventCard
        v-for="event in filteredEvents"
        :key="event.id"
        :event="event"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import EventCard from "@/components/EventCard.vue";
const activeFilter = ref("all");

const events = [
  {
    id: "sigma-mengajar",
    title: "Sigma Mengajar Volunteer",
    description:
      "Teaching volunteer Corporate Social Responsibility program empowering to educate children in need",
    date: "2025",
    type: "Volunteering",
    image: "/images/events/sigmamengajar.png",
    link: "/events/event-details/sigma-mengajar",
  },

  {
    id: "sdlc-seminar",
    title: "SDLC Seminar",
    description: "Practical Approach to software vulnerability",
    date: "2025",
    type: "Workshop",
    image: "/images/events/SDLC/SDLC.jpeg",
    link: "/events/event-details/sdlc-seminar",
  },

  {
    id: "blockchain-workshop",

    title: "Blockchain Workshop",
    description:
      "Introduction to blockchain fundamentals for university students.",
    date: "2024",
    type: "Workshop",
    image: "/images/events/blockchainworkshop.png",
    link: "/events/event-details/blockchain-workshop",
  },
  {
    id: "it-teacher",
    title: "PartTime ICT Teaching ",
    description:
      "Teaching algorithms and basic programming logic using Scratch and Code.org.",
    date: "2024",
    type: "Teaching",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "/events/event-details/it-teacher",
  },

  {
    title: "Qatar Animal Welfare Society QAWS Volunteer",
    description:
      "Animal Welfare high school volunteer program to care for shelter animals",
    date: "2017",
    type: "Workshop",
    image: "/images/events/.jpeg",
  },
];

const filteredEvents = computed(() => {
  if (activeFilter.value === "all") return events;
  return events.filter((e) => e.type === activeFilter.value);
});

const buttonClass = (type) => {
  return [
    "px-4 py-2 rounded-lg font-semibold transition",
    activeFilter.value === type
      ? "bg-blue-500 text-white"
      : "bg-gray-700 text-gray-200 hover:bg-gray-600",
  ];
};
</script>
