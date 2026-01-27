<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-white">
    <!-- HERO -->
    <div class="text-center mb-16">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        SIGMA Mengajar
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto">
        A Corporate Social Responsibility (CSR) initiative focused on teaching
        basic literacy, numeracy, and life skills to children in need.
      </p>
    </div>

    <!-- META INFO -->
    <div
      class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 text-center sm:text-left"
    >
      <div class="bg-white/5 rounded-xl p-4 border border-white/10">
        <p class="text-sm text-gray-400">Duration</p>
        <p class="font-semibold">3 Months</p>
      </div>
      <div class="bg-white/5 rounded-xl p-4 border border-white/10">
        <p class="text-sm text-gray-400">Location</p>
        <p class="font-semibold">Indonesia</p>
      </div>
      <div class="bg-white/5 rounded-xl p-4 border border-white/10">
        <p class="text-sm text-gray-400">Role</p>
        <p class="font-semibold">Volunteer Educator</p>
      </div>
    </div>

    <!-- ABOUT -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-4">About the Program</h2>
      <p class="text-gray-300 leading-relaxed">
        SIGMA Mengajar is a CSR program aimed at supporting children from
        underprivileged backgrounds by providing access to fundamental
        education. The program focuses not only on academic skills, but also on
        confidence, communication, and creativity.
      </p>
    </section>

    <!-- WHAT I TAUGHT -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-6">What We Taught</h2>

      <div class="grid sm:grid-cols-2 gap-6">
        <div class="bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 class="font-semibold mb-2">📚 Calistung</h3>
          <p class="text-gray-300 text-sm">
            Reading, writing, and basic arithmetic such as addition,
            subtraction, and number recognition.
          </p>
        </div>

        <div class="bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 class="font-semibold mb-2">🗣 Communication Skills</h3>
          <p class="text-gray-300 text-sm">
            Encouraging children to speak confidently, express ideas, and
            interact positively with others.
          </p>
        </div>

        <div class="bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 class="font-semibold mb-2">🎨 Handcraft & Artwork</h3>
          <p class="text-gray-300 text-sm">
            Creative activities such as drawing, coloring, and crafting to
            develop fine motor skills and imagination.
          </p>
        </div>

        <div class="bg-white/5 rounded-xl p-5 border border-white/10">
          <h3 class="font-semibold mb-2">🤝 Character Building</h3>
          <p class="text-gray-300 text-sm">
            Teaching discipline, teamwork, respect, and responsibility through
            interactive activities.
          </p>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-6">Activities & Moments</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <!-- <img
          v-for="n in 6"
          :key="n"
          :src="`/images/events/sigma-mengajar-${n}.jpg`"
          alt="SIGMA Mengajar activity"
          class="rounded-xl object-cover h-40 w-full bg-gray-700"
        /> -->
      </div>
    </section>

    <!-- REFLECTION -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-4">My Experience</h2>
      <p class="text-gray-300 leading-relaxed">
        Being part of SIGMA Mengajar was a humbling and rewarding experience.
        Teaching children with limited access to education taught me patience,
        empathy, and the importance of adapting communication styles to
        different learning needs. Seeing their progress and enthusiasm was
        incredibly fulfilling.
      </p>
    </section>

    <!-- IMPACT -->
    <section class="bg-white/5 rounded-2xl p-6 border border-white/10">
      <h2 class="text-2xl font-semibold mb-4">Impact & Results</h2>
      <ul class="list-disc list-inside text-gray-300 space-y-2">
        <li>Improved basic reading and counting skills</li>
        <li>Increased confidence in communication</li>
        <li>Positive engagement in group activities</li>
        <li>Stronger interest in learning</li>
      </ul>
    </section>
  </section>
</template>

<script setup>
useHead({
  title: "SIGMA Mengajar – Volunteering Experience",
  meta: [
    {
      name: "description",
      content:
        "CSR volunteering experience teaching literacy, numeracy, and life skills to children in need through SIGMA Mengajar.",
    },
  ],
});
</script>
