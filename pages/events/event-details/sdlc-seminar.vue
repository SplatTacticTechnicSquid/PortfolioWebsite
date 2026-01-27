<template>
  <section class="max-w-5xl mx-auto px-6 py-16 text-white">
    <!-- HEADER -->
    <header class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">SDLC Seminar</h1>
      <p class="text-gray-400 max-w-2xl mx-auto">
        A seminar introducing the Software Development Life Cycle (SDLC), its
        stages, and real-world implementation in software projects.
      </p>
    </header>

    <!-- HERO IMAGE -->
    <div class="mb-16 rounded-2xl overflow-hidden border border-white/10">
      <img
        src=""
        alt="SDLC Seminar"
        class="w-full h-[240px] sm:h-[360px] object-cover"
      />
    </div>

    <!-- META INFO -->
    <section class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Role</p>
        <p class="font-semibold">Speaker / Presenter</p>
      </div>
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Audience</p>
        <p class="font-semibold">Students / Beginners</p>
      </div>
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Location</p>
        <p class="font-semibold">On-site Seminar</p>
      </div>
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Duration</p>
        <p class="font-semibold">~2 Hours</p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="space-y-12">
      <!-- ABOUT -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">About the Seminar</h2>
        <p class="text-gray-300 leading-relaxed">
          This seminar was designed to introduce participants to the
          <span class="font-semibold text-green-400">
            Software Development Life Cycle (SDLC)
          </span>
          — from planning and analysis to deployment and maintenance. The goal
          was to help students understand how real software projects are
          structured and managed.
        </p>
      </div>

      <!-- WHAT WAS TAUGHT -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">What I Taught</h2>
        <ul class="grid sm:grid-cols-2 gap-4 text-gray-300">
          <li class="bg-white/5 p-4 rounded-xl">Requirement Analysis</li>
          <li class="bg-white/5 p-4 rounded-xl">System Design</li>
          <li class="bg-white/5 p-4 rounded-xl">Implementation</li>
          <li class="bg-white/5 p-4 rounded-xl">Testing & QA</li>
          <li class="bg-white/5 p-4 rounded-xl">Deployment</li>
          <li class="bg-white/5 p-4 rounded-xl">Maintenance</li>
        </ul>
      </div>

      <!-- GALLERY -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Seminar Moments</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src=""
            class="rounded-xl object-cover h-60"
            alt="Seminar photo 1"
          />
          <img
            src=""
            class="rounded-xl object-cover h-60"
            alt="Seminar photo 2"
          />
        </div>
      </div>

      <!-- IMPACT -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Outcome & Impact</h2>
        <p class="text-gray-300 leading-relaxed">
          Participants gained a clearer understanding of how software is built
          in professional environments. Many expressed increased confidence in
          approaching software projects and understanding team workflows.
        </p>
      </div>

      <!-- PERSONAL REFLECTION -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 class="text-2xl font-semibold mb-4">My Reflection</h2>
        <p class="text-gray-300 leading-relaxed">
          Delivering this seminar strengthened my communication skills and
          reaffirmed my passion for teaching and knowledge sharing. Explaining
          complex technical concepts in a simple and engaging way was both
          challenging and rewarding.
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
useHead({
  title: "SDLC Seminar | Raditya",
  meta: [
    {
      name: "description",
      content:
        "SDLC Seminar conducted by Raditya, covering software development life cycle concepts and real-world practices.",
    },
  ],
});
</script>
