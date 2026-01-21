<template>
  <section class="p-10 max-w-5xl mx-auto">
    <!-- HERO -->
    <header class="text-center mb-16">
      <h1 class="text-4xl font-bold text-white">Sigma Mengajar Volunteer</h1>
      <h2 class="text-2xl text-gray-400 mt-4">
        Corporate Social Responsibility
      </h2>
    </header>

    <div class="flex justify-center gap-4 mb-12">
      <NuxtImg />
      <NuxtImg />
    </div>

    <!-- MOTIVATION -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Motivation</h2>
      <p class="text-gray-300 leading-relaxed">The</p>
    </section>

    <!-- FEATURES -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Core</h2>
      <ul class="list-disc list-inside text-gray-300 space-y-2">
        <li>Real-time vehicle location tracking</li>
      </ul>
    </section>

    <!-- PROCEDURES -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Workflow</h2>
      <ol class="list-decimal list-inside text-gray-300 space-y-2">
        <li>Client app retrieves GPS coordinates</li>
      </ol>
    </section>

    <!-- FLOWCHART -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-4">Flowchart</h2>

      <NuxtImg />
    </section>

    <!-- TECH STACK -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Stack</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-800 p-6 rounded-lg">
          <h3 class="font-semibold mb-2">Task</h3>
          <ul class="text-gray-300 space-y-1">
            <li>WebSocket Communication</li>
          </ul>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg">
          <h3 class="font-semibold mb-2">Responsibility</h3>
          <ul class="text-gray-300 space-y-1">
            <li>REST API</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ENVIRONMENT -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Environment</h2>
      <ul class="text-gray-300 space-y-2">
        <li>OS:</li>
      </ul>
    </section>

    <!-- PROGRAM FLOW -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-4">Program</h2>
      <p class="text-gray-300 leading-relaxed">If the</p>
    </section>

    <div class="flex justify-between">
      <!-- NAVIGATION -->
      <NuxtLink
        to="/projects"
        class="inline-flex items-center gap-2 text-blue-400 hover:underline"
      >
        <Icon name="material-symbols:arrow-back" class="text-xl" />
        <span class="leading-none">Back to Projects</span>
      </NuxtLink>
      <NuxtLink to="" target="_blank"> Link to Canva presentation </NuxtLink>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "Socket Programming with Location Tracking",
  meta: [
    {
      name: "description",
      content:
        "Mobile vehicle tracking application using socket programming, Flask backend, and Android client.",
    },
  ],
});
</script>
