<template>
  <section class="max-w-5xl mx-auto px-6 py-16 text-white">
    <!-- HEADER -->
    <header class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Secure Software Development SDLC
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto">
        The following seminar I attended as one of the speaker is to represent
        about secure software development.
      </p>
    </header>

    <!-- HERO IMAGE -->
    <div class="mb-16 rounded-2xl overflow-hidden border border-white/10">
      <img
        src="/images/events/SDLC/SDLC2.jpeg"
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
        <p class="font-semibold">Employees</p>
      </div>
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Location</p>
        <p class="font-semibold">Yogyakarta</p>
      </div>
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Duration</p>
        <p class="font-semibold">Approximate 2 Hours</p>
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
        <h2 class="text-2xl font-semibold mb-4">
          As one of the presenter, I explained about
        </h2>
        <ul class="grid sm:grid-cols-2 gap-4 text-gray-300">
          <li class="bg-white/5 p-4 rounded-xl text-xl">
            <span class="font-semibold text-green-400">1 </span>Understanding
            computer software vulnerabilities
          </li>
          <li class="bg-white/5 p-4 rounded-xl text-xl">
            <span class="font-semibold text-green-400">2 </span>Case study of a
            CVE
          </li>
          <li class="bg-white/5 p-4 rounded-xl text-xl">
            <span class="font-semibold text-green-400">3 </span>
            Practical demonstration
          </li>
          <li class="bg-white/5 p-4 rounded-xl text-xl">
            <span class="font-semibold text-green-400">4 </span>Root cause
            Analysis of CVE-55182
          </li>
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
        <p class="text-gray-300 leading-relaxed mb-2">
          One of the notable reason is understanding about computer's memory
          work in detail and how a software manages their memory in functions
          and other operations. Notably about buffer overflow. The seminar gave
          awareness of why pre existing security flaw since the early era of
          software development is still relevant until modern date.
        </p>
        <p class="text-gray-300 leading-relaxed">
          By understanding how memory addresses are stored in computers, we can
          assess what practices that can cause such vulnerability that can cause
          administrative exploit through privilege escalation.
        </p>
      </div>

      <!-- Overview of buffer overflow -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 class="text-2xl font-semibold mb-4">Overview of Buffer overflow</h2>
        <p class="text-gray-300 leading-relaxed mb-4">
          A buffer overflow is a condition when a program tries to write more
          data into a memory buffer than it was allocated to hold. Meaning that
          the process writes the data beyond the bounds of a memory region
          within the computer.
        </p>
        <p class="text-gray-300 leading-relaxed mb-8">
          Learn more about buffer overflow
        </p>
        <NuxtLink
          to="/learning/learning-details/buffer-overflow"
          class="hover:text-blue-400"
          >Buffer Overflow</NuxtLink
        >
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
