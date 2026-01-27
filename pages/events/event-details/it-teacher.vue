<template>
  <section class="max-w-6xl mx-auto px-6 py-16 text-white">
    <!-- HERO -->
    <div class="mb-12">
      <NuxtImg
        src="/images/"
        alt="Teaching IT at IGCSE secondary school"
        class="w-full h-[260px] sm:h-[360px] object-cover rounded-2xl"
        sizes="(max-width: 640px) 100vw, 1024px"
        preload
        priority
      />
    </div>

    <!-- TITLE -->
    <div class="max-w-3xl mb-12">
      <h1 class="text-3xl md:text-4xl font-bold mb-3">
        IGCSE IT Teaching Experience
      </h1>
      <p class="text-gray-300">
        Part-time IT teacher for secondary school students following the IGCSE
        curriculum (Year 7–10).
      </p>
    </div>

    <!-- META -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-sm"
    >
      <div class="bg-white/5 border border-white/10 rounded-xl p-4">
        <p class="text-gray-400">Role</p>
        <p class="font-semibold">IT Teacher</p>
      </div>

      <div class="bg-white/5 border border-white/10 rounded-xl p-4">
        <p class="text-gray-400">Curriculum</p>
        <p class="font-semibold">IGCSE</p>
      </div>

      <div class="bg-white/5 border border-white/10 rounded-xl p-4">
        <p class="text-gray-400">Student Level</p>
        <p class="font-semibold">Year 7 – 10</p>
      </div>

      <div class="bg-white/5 border border-white/10 rounded-xl p-4">
        <p class="text-gray-400">Subject</p>
        <p class="font-semibold">Information Technology</p>
      </div>
    </div>

    <!-- WHAT I TAUGHT -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold mb-6">What I Taught</h2>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="font-semibold mb-2">Algorithms & Logic</h3>
          <p class="text-gray-300 text-sm">
            Introduced students to computational thinking, basic algorithms,
            flow of logic, and problem-solving approaches.
          </p>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="font-semibold mb-2">Game Making with Scratch</h3>
          <p class="text-gray-300 text-sm">
            Taught students how to build simple games using Scratch, focusing on
            events, conditions, loops, and creativity.
          </p>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 class="font-semibold mb-2">Web Development Basics</h3>
          <p class="text-gray-300 text-sm">
            Introduced HTML & CSS fundamentals, page structure, styling, and how
            the web works as a foundation for programming.
          </p>
        </div>
      </div>
    </div>

    <!-- TEACHING APPROACH -->
    <div class="mb-16 max-w-3xl">
      <h2 class="text-2xl font-semibold mb-4">Teaching Approach</h2>
      <p class="text-gray-300 leading-relaxed">
        I focused on making technical concepts approachable and engaging for
        students with little to no prior programming experience. Lessons were
        hands-on, interactive, and project-based to help students understand how
        abstract concepts translate into real applications.
      </p>
    </div>

    <!-- EXPERIENCE & IMPACT -->
    <div class="max-w-3xl">
      <h2 class="text-2xl font-semibold mb-4">My Experience</h2>
      <p class="text-gray-300 leading-relaxed">
        Teaching IT at an IGCSE secondary school strengthened my communication
        skills and ability to break down complex topics into simple, digestible
        lessons. It was rewarding to see students gain confidence in problem
        solving, creativity, and logical thinking through technology.
      </p>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: "IGCSE IT Teaching Experience",
  meta: [
    {
      name: "description",
      content:
        "Part-time IT teaching experience for IGCSE secondary school students, covering algorithms, Scratch game development, and web fundamentals.",
    },
  ],
});
</script>
