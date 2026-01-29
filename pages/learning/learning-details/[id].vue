<template>
  <div class="p-10">
    <Transition name="fade" mode="out-in">
      <component :is="LearningComponent" :key="route.params.id" />
    </Transition>
  </div>
</template>

<script setup>
import { defineAsyncComponent, computed } from "vue";
import { useRoute } from "vue-router";
import LearningNotFound from "../learning-not-found.vue";

const route = useRoute();
const articleId = route.params.id;

const learningComponents = {
  "buffer-overflow": defineAsyncComponent(
    () => import("./buffer-overflow.vue"),
  ),
  // "blockchain-basics": defineAsyncComponent(
  //   () => import("./blockchain-basics.vue"),
  // ),
  // add more articles here
};

const LearningComponent = computed(
  () => learningComponents[articleId] || LearningNotFound,
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
