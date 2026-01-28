<template>
  <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 text-white">
    <!-- Title -->
    <h1 class="text-3xl sm:text-4xl font-bold mb-4">
      Buffer Overflow Vulnerability
    </h1>

    <p class="text-gray-400 text-sm mb-8">
      Learning Article · Software Security · Development · Computer Science
    </p>

    <!-- Intro -->
    <section class="mb-10">
      <p class="leading-relaxed mb-2">
        A computer program stores its data in a region of the computer called
        the memory. Each memory has an address where a software can store its
        variables each with an assigned value. Each of these memory container
        are called buffers; a placeholder for the values of the program with a
        fixed size.
      </p>
      <p class="leading-relaxed mb-2">
        However the major problem is with the software, sometimes when handling
        with memory assignment. Such programs can misbehave in a way that it
        copies data more than what it is required, this causes a phenomenon
        called the
        <strong class="font-semibold text-green-500">buffer overflow</strong>
      </p>
      <p class="leading-relaxed">
        <strong class="font-semibold text-green-500">Buffer overflow</strong> is
        an event when a computer program writes more data into a memory
        container called a buffer A <strong>buffer overflow</strong> occurs when
        a program writes more data to a memory buffer than it was designed to
        hold. This extra data can overwrite adjacent memory, potentially
        altering program behavior, causing crashes, or enabling attackers to
        execute malicious code.
      </p>
    </section>

    <!-- Why it matters -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-3">
        Why addressing Buffer Overflow is still crucial?
      </h2>

      <ul class="list-disc list-inside text-gray-300 space-y-2">
        <li>
          It is one of the <strong>oldest and most dangerous</strong> security
          vulnerabilities
        </li>
        <li>Common in low-level languages like <strong>C and C++</strong></li>
        <li>
          The exploit leads to
          <strong>system compromise, data leak, or privilege escalation</strong>
        </li>
        <li>Often exploited when input validation is weak or absent</li>
        <li>
          Buffer overflow exploit is still present in modern hardware and
          programs such as websites, IoT devices, smartwatches, security cameras
          and consumer electronics
        </li>
      </ul>
    </section>

    <!-- How it happens -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-3">How Buffer Overflow Happens</h2>

      <p class="text-gray-300 leading-relaxed mb-4">
        Buffer overflows typically occur when developers assume that user input
        will always stay within expected limits. When these assumptions fail,
        memory boundaries are violated.
      </p>

      <div
        class="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300"
      >
        <p class="mb-2 font-semibold text-white">Common causes include:</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Using unsafe functions that do not check input length</li>
          <li>Improper memory allocation</li>
          <li>Lack of bounds checking</li>
          <li>Trusting external or user-controlled input</li>
        </ul>
      </div>
    </section>

    <!-- SDLC -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-3">Buffer Overflow in the SDLC</h2>

      <p class="text-gray-300 leading-relaxed mb-4">
        Buffer overflow vulnerabilities are best addressed early in the
        <strong>Software Development Life Cycle (SDLC)</strong>.
      </p>

      <ul class="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>Design phase:</strong> Choose safe languages and architectures
        </li>
        <li>
          <strong>Development phase:</strong> Use secure coding practices and
          safe libraries
        </li>
        <li>
          <strong>Testing phase:</strong> Perform static and dynamic security
          testing
        </li>
        <li>
          <strong>Deployment:</strong> Enable compiler protections and runtime
          mitigations
        </li>
      </ul>
    </section>

    <!-- Prevention -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-3">Prevention & Mitigation</h2>

      <div class="grid sm:grid-cols-2 gap-4">
        <div class="bg-white/5 border border-white/10 rounded-xl p-4">
          <h3 class="font-semibold mb-2">Development Practices</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-1">
            <li>Validate and sanitize all inputs</li>
            <li>Use safe functions and libraries</li>
            <li>Avoid manual memory handling when possible</li>
          </ul>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-xl p-4">
          <h3 class="font-semibold mb-2">System-Level Protections</h3>
          <ul class="list-disc list-inside text-gray-300 space-y-1">
            <li>Stack canaries</li>
            <li>Address Space Layout Randomization (ASLR)</li>
            <li>Non-executable memory (DEP / NX)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Closing -->
    <section>
      <p class="text-gray-400 italic mb-12">
        Understanding buffer overflow vulnerabilities is essential for building
        secure software systems. Awareness, secure coding, and proper testing
        significantly reduce the risk of exploitation.
      </p>
    </section>

    <!-- References -->
    <section>
      <h2 class="font-bold text-2xl">References</h2>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Buffer Overflow Vulnerability",
  meta: [
    {
      name: "description",
      content:
        "Learning article explaining buffer overflow vulnerabilities, their impact, and prevention in the SDLC.",
    },
  ],
});
</script>
