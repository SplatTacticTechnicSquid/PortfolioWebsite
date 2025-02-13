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
        width: `200px`,
        height: `200px`,
      }"
    />
    <main class="flex-grow p-10">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from "@vueuse/core";
const { x, y } = useMouse();
</script>
