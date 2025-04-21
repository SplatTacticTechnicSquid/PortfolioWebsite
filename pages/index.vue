<template>
  <div>Hi, This is the main page index</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "redirect",
});

useHead({
  title: "Portfolio Index",
  meta: [
    {
      name: "The main page ",
      content: "Main index page redirect",
    },
  ],
});
</script>
