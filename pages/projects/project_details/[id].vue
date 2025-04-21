<template>
  <div class="p-10">
    <Transition name="fade" mode="out-in">
      <component :is="ProjectComponent" :key="route.params.id" />
    </Transition>
  </div>
</template>

<script setup>
import { shallowRef, defineAsyncComponent, computed } from "vue";
import { useRoute } from "vue-router";
import ProjectNotFound from "../project-not-found.vue";

const route = useRoute();
const projectId = route.params.id;

// Mapping project files to their IDs
const projectComponents = {
  "nuxt-portfolio": defineAsyncComponent(() => import("./nuxt-portfolio.vue")),
  "iot-weatherstation": defineAsyncComponent(() =>
    import("./iot-weatherstation.vue")
  ),
  "smartparking-logger": defineAsyncComponent(() =>
    import("./smartparking-logger.vue")
  ),
  "intelligent-iot-smokedetector": defineAsyncComponent(() =>
    import("./intelligent-iot-smokedetector.vue")
  ),
};

// Use computed to dynamically switch between valid projects and "Not Found"
const ProjectComponent = computed(
  () => projectComponents[projectId] || ProjectNotFound
);
</script>

<style scoped>
/* Smooth Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
