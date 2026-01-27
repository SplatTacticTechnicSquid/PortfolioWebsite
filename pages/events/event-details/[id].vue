<template>
  <div class="p-10">
    <Transition name="fade" mode="out-in">
      <component :is="EventComponent" :key="route.params.id" />
    </Transition>
  </div>
</template>

<script setup>
import { defineAsyncComponent, computed } from "vue";
import { useRoute } from "vue-router";
import EventNotFound from "../event-not-found.vue";

const route = useRoute();
const eventId = route.params.id;

const eventComponents = {
  // "nuxt-portfolio": defineAsyncComponent(() => import("./nuxt-portfolio.vue")),

  "sigma-mengajar": defineAsyncComponent(() => import("./sigma-mengajar.vue")),
  "sdlc-seminar": defineAsyncComponent(() => import("./sdlc-seminar.vue")),
  "blockchain-workshop": defineAsyncComponent(
    () => import("./blockchain-workshop.vue"),
  ),
  "it-teacher": defineAsyncComponent(() => import("./it-teacher.vue")),

  // add more events here
};

const EventComponent = computed(
  () => eventComponents[eventId] || EventNotFound,
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
