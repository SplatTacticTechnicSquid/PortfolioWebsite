<template>
  <div class="min-h-screen flex flex-col bg-red-900 text-white">
    <header class="text-center py-6 text-3xl font-bold">
      ⚠ Project Not Found
    </header>
    <main class="flex-grow flex items-center justify-center">
      <slot />
      <!-- Content from pages/projects/[id].vue will be injected here -->
    </main>
    <footer class="text-center py-4 text-gray-300">
      <NuxtLink to="/" class="hover:text-white">Return Home</NuxtLink>
    </footer>
  </div>
</template>
