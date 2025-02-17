<template>
  <div class="text-center py-20 text-white">
    <h1 class="text-5xl font-bold text-red-500">Project Not Found</h1>
    <p class="text-lg text-gray-400 mt-4">
      Oops! We couldn't find the project you're looking for.
    </p>

    <NuxtLink
      to="/projects"
      class="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg"
    >
      Back to Projects
    </NuxtLink>
  </div>
</template>
