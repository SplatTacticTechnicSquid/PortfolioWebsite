<template>
  <div
    class="min-h-screen flex flex-col bg-darkblue-900 bg-gradient-to-b from-blackto-green-500/30 text-white"
  >
    <!-- <header class="text-center py-4 text-2xl font-bold">Custom Layout</header> -->
    <div
      class="absolute bg-green-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }"
    />
    <main class="flex-grow p-10">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useMouse, useWindowSize } from "@vueuse/core";
const { x, y } = useMouse();
const { width, height } = useWindowSize();

const dx = computed(() => Math.abs(x.value - width.value / 2));
const dy = computed(() => Math.abs(y.value - height.value / 2));

const distance = computed(() => Math.sqrt(dx.value ** 2 + dy.value ** 2));

const size = computed(() => Math.max(200 - distance.value, 100));
</script>
