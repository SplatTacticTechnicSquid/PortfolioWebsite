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
      <NuxtImg
        src="images/articles/buffer-overflow/bufovflowterminal.png"
        class="rounded-2xl mb-12 w-full object-cover"
        format="webp"
      />

      <figure class="float-right ml-6 mb-4 w-48 text-center">
        <NuxtImg
          src="images/articles/buffer-overflow/ram-stick.png"
          class="rounded-xl"
          format="webp"
          alt="RAM sticks"
        />
        <figcaption class="mt-2 text-xs text-gray-500">
          RAM stick component used as system memory
        </figcaption>
      </figure>

      <p class="leading-relaxed mb-4">
        A computer program stores its data in a region of the computer called
        memory. Each memory location has an address where software can store
        variables, each with an assigned value. Computers store their data
        temporarily in a physical component known as Random Access Memory (RAM).
        Moreover, the memory containers are called buffers. Buffers act as
        placeholders for program values with a declared size.
      </p>

      <figure class="float-left mr-6 mb-4 w-48 text-center">
        <NuxtImg
          src="images/articles/buffer-overflow/buffer.png"
          class="rounded-xl"
          format="webp"
          alt="buffer memory"
        />
        <figcaption class="mt-2 text-xs text-gray-500">
          simple illustration of computer temporary buffer storage
        </figcaption>
      </figure>
      <p class="text-xl italic">Buffers</p>

      <p class="leading-relaxed mb-2">
        A computer buffer is used to hold data temporarily while the data is
        being transferred from one place to another. Computers take advantage of
        buffers to optimize performance such as caching. For example, hard disk
        drives are known for their slow performance in accessing data. To combat
        this issue, computer uses buffers to efficiently access the data by
        placing it in a memory region temporarily to speed up the access speed
        rather than having it to read sequentially raw from the hard drive. This
        technique is used for opening commonly used software. Online videos also
        use buffer memory when streaming to prevent interruption whenever there
        is a connection issue.
      </p>
      <p class="leading-relaxed mb-2">
        However the major problem is associated with the software when handling
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

    <div class="bg-white/5 border border-white/10 rounded-xl p-4 mb-10">
      <section class="mb-10">
        <h2 class="text-2xl font-bold mb-3 text-red-600">
          Damages that can be done with buffer overflow
        </h2>

        <div class="mb-4">
          <h3 class="inline-flex items-center gap-2 text-xl mb-2 font-semibold">
            <Icon name="clarity:administrator-line" class="text-4xl" />
            Privilege Escalation
          </h3>
          <p class="leading-relaxed">
            In system account, a user will have certain level of privileges of
            what they can do. This includes modifying the system settings,
            services and installing applications. Now privilege escalation is a
            term where a user is granted a root or administrator access to a
            system. Buffer overflow can overwrite adjacent memory regions that
            are not allowed to be accessed by a program and it is reserved for
            the system or high level processes.
          </p>
          <p class="leading-relaxed">
            Attackers can use this tactic to trick the operating system thinking
            that the application is running as administrator as it is accessing
            a forbidden memory space that is reserved for root or admin access
            only. Therefore the operating system accidentally provides the
            attacker with highest privileges to perform their instruction
          </p>
        </div>

        <div class="mb-4">
          <h3 class="inline-flex items-center gap-2 text-xl mb-2">
            <Icon name="ph:file-code" class="text-4xl" />Code Execution
          </h3>
          <p class="leading-relaxed">
            Buffer overflows can lead to arbitrary code execution by allowing an
            attacker to overwrite adjacent memory when more data is written to a
            buffer than it can hold. If this overflow reaches control data such
            as a return address, the attacker can modify it. A return address is
            a memory location that tells the program where to continue execution
            after a function finishes. By overwriting the return address, the
            attacker can redirect the program's execution flow to a location of
            their choosing. As a result, the CPU executes attacker-controlled
            instructions with the same privileges as the vulnerable program,
            which can lead to serious security compromises.
          </p>
        </div>

        <div class="mb-4">
          <h3 class="inline-flex items-center gap-2 text-xl mb-2">
            <Icon name="subway:file-6" class="text-4xl" />Data Corruption
          </h3>
          <p class="leading-relaxed">
            Common impact of buffer overflow is data corruption. This occurs
            when a program writes more data to a buffer than it can hold,
            causing the excess data to overwrite adjacent memory locations that
            store important program data.
          </p>
          <p class="leading-relaxed">
            By overriding other programs' data, the variable values can be
            assigned wrongly or modified in a point where the software can be
            rendered useless or doing unintended operations that can crash the
            computer instead.
          </p>
        </div>
      </section>
    </div>

    <!-- How it happens -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold mb-3">How Buffer Overflow Happens</h2>

      <p class="text-gray-300 leading-relaxed mb-4">
        Buffer overflows typically occur when developers assume that user input
        will always stay within expected limits. When these assumptions fail,
        memory boundaries are violated.
      </p>

      <NuxtImg
        src="images/articles/buffer-overflow/var1var2bufovflow.png"
        class="rounded-2xl mb-12 w-full object-cover"
        format="webp"
      />

      <h3 class="text-xl mb-4 font-semibold">What happens here</h3>
      <p class="mb-2">
        The diagram above illustrates how a buffer overflow happens when a
        program copies more data into a memory buffer than it was designed to
        hold. In this example, <b>Variable 1</b> has a buffer size of
        <b>10 bytes</b>, which is enough to store the string "HELLOWORLD". Each
        character occupies one byte, and the buffer indices range from 0 to 9.
        However, <b>Variable 2</b> has a smaller buffer size of only
        <b>8 bytes</b>. This means it can safely store only the
        <i>first eight characters of the string</i>.
      </p>

      <p class="mb-2">
        When the function strcpy(variable1, variable2) is used, it blindly
        copies data from Variable 1 into Variable 2 without checking the
        destination buffer size. As a result, the characters 'L' and 'D' exceed
        Variable 2’s allocated memory and spill into adjacent memory locations,
        shown as the highlighted overflow region in the diagram. This excess
        data overwrites whatever happens to be stored immediately after Variable
        2 in memory.
      </p>

      <p class="mb-2">
        That data could belong to another variable, a control value, or internal
        program state. This unintended overwrite is what constitutes a buffer
        overflow. The key issue is that functions like strcpy assume the
        destination buffer is large enough. When that assumption is false, the
        program writes beyond its intended boundaries, leading to data
        corruption, crashes, or in severe cases, security vulnerabilities.
      </p>

      <div
        class="bg-white/5 border border-white/10 rounded-xl p-4 text-gray-300"
      >
        <p class="mb-2 font-semibold text-white">Common causes include:</p>
        <ul class="list-disc space-y-2 ml-6">
          <li>
            Using unsafe functions that do not check input length
            <ul class="list-[circle] ml-6 mt-1 space-y-1">
              <li>
                e.g. in C programming language there is a strcpy() function
                where a user can copy a value from one variable to another
                without bound checking
              </li>
            </ul>
          </li>

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
    <!-- <section>
      <h2 class="font-bold text-2xl">References</h2>
    </section> -->
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
