<template>
  <main class="relative min-h-screen bg-cover bg-center bg-fixed">
    <!-- Background Overlay 
     style="background-image: url('/images/about-bg.jpg')"
         <div class="absolute inset-0 bg-black/70"></div>
-->

    <div
      class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-white"
    >
      <!-- Header -->
      <header class="text-center">
        <h1
          class="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide"
        >
          About Me
        </h1>
        <p class="text-gray-300 text-base sm:text-lg mt-4 max-w-3xl mx-auto">
          I am a
          <span class="text-green-400 font-bold">full-stack developer</span>
          passionate about
          <span class="text-blue-400 font-bold">Web Development</span>,
          <span class="text-yellow-400 font-bold"
            >Electronics & Instrumentation</span
          >
          and <span class="text-green-400 font-bold">AI</span>
        </p>
      </header>

      <!-- Terminal Section -->
      <section class="mt-10 w-full max-w-2xl mx-auto px-2 sm:px-0">
        <div class="bg-gray-700 rounded-t-lg flex items-center px-4 py-2">
          <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div
          class="bg-black text-green-400 font-mono text-sm sm:text-base md:text-lg p-4 sm:p-6 rounded-b-lg shadow-lg border border-green-500"
        >
          <p>
            <span class="text-green-400">> $</span> whoami<span
              class="animate-blink"
              >_</span
            >
          </p>
          <p class="mt-2">
            <span class="text-green-400">> $</span>
            <span class="font-bold text-green-300">{{ typedTextHello }}</span
            ><span class="animate-blink">_</span>
          </p>
        </div>
      </section>

      <!-- Biography -->
      <section
        class="mt-12 bg-gray-800 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10"
      >
        <!-- Image -->
        <div class="flex-1 flex justify-center">
          <NuxtImg
            src="/images/profile/myself2.png"
            alt="profile"
            width="300"
            format="webp"
            class="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover shadow-lg select-none pointer-events-none"
            draggable="false"
          />
        </div>

        <!-- Content -->
        <div class="flex-1">
          <span
            class="bg-yellow-400 text-black px-4 py-1 rounded font-semibold"
          >
            About Me
          </span>

          <h2
            class="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500"
          >
            Hi
            <span class="text-blue-500">I'm Raditya!</span>
          </h2>

          <p class="mt-4 text-gray-400 leading-relaxed">
            I am a graduate from a prestigious university in Indonesia namely
            Universitas Gadjah Mada majored in Electronics and Instrumentation
            with a core focus on Information Technology development with Web
            Development skillset.
            <br />
            Currently working as a
            <span class="font-semibold">junior programmer </span> developing
            front end web solutions.
          </p>

          <!-- Stats -->
          <div
            class="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 text-center items-center"
          >
            <!-- UGM Alumni -->
            <div class="flex flex-col items-center">
              <div class="h-32 w-32 flex items-center justify-center">
                <NuxtImg
                  src="/images/logos/UGM.png"
                  class="max-h-full max-w-full object-contain"
                  format="webp"
                />
              </div>
              <p class="mt-2 text-sm text-white">Alumni of</p>
            </div>

            <!-- Telkomsigma -->
            <div class="flex flex-col items-center">
              <div class="h-32 w-32 flex items-center justify-center">
                <NuxtImg
                  src="/images/logos/telkomsigmalogo.png"
                  class="max-h-full max-w-full object-contain"
                  format="webp"
                />
              </div>
              <p class="mt-2 text-sm text-white">Currently Working at</p>
            </div>
          </div>

          <!-- Contact
          <div class="mt-8 flex items-center justify-end">
            <div>
              <p class="text-white text-xl font-extrabold">
                radityaprtm2002@gmail.com
              </p>
            </div>

            <button
              class="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-bold transition"
            >
              ABOUT ME
            </button>
          </div> -->
        </div>
      </section>

      <!-- Skills Section -->
      <section class="mt-16">
        <h2 class="text-4xl font-bold text-center mb-6">
          <span
            v-for="(char, index) in skillText"
            :key="index"
            class="wave"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            {{ char }}
          </span>
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            <Icon :name="skill.icon" class="text-4xl mx-auto text-green-400" />
            <p class="mt-2 text-lg">{{ skill.name }}</p>
          </div>
        </div>
      </section>

      <section class="mt-16">
        <h2 class="text-4xl font-bold text-center mb-6">
          {{ displayedText }}<span class="cursor"></span>
        </h2>

        <article class="mb-6 p-4 sm:p-6 bg-white/10 rounded-lg">
          <h3 class="text-2xl font-bold text-yellow-400">
            <span
              class="inline-block text-yellow-400 font-bold italic transform -skew-x-6"
              style="
                text-shadow:
                  0 0 4px rgba(255, 215, 0, 0.7),
                  0 0 8px rgba(255, 165, 0, 0.5);
              "
              >Current Role:</span
            >
            Junior Programmer (Fullstack)
          </h3>
          <p class="text-base sm:text-lg text-gray-300">
            PT. SIGMA CIPTA CARAKA (Telkomsigma)
          </p>
          <div class="mt-2">
            <p class="mb-2">
              As a junior programmer I have developed front-end solutions with
              various Javascript framework including Next.JS, Vue.JS, Nuxt.JS
              and Angular.JS within the company.
            </p>

            <p class="mb-2">
              Moreover, I develop REST API integration with Axios framework as
              part of the Javascript CRUD approach. In project work I adopt the
              AGILE SCRUM technique where we use sprint planning for project
              review and completion method based on weekly cycles. As part of
              development, I have experience in CI/CD with GitLab pipeline that
              uses Jenkins for deployment.
            </p>

            <p class="mb-4">
              Furthermore, I have experience in using version managering
              software such as GitLab and GitHub as the main repository. In IT
              consulting with user, I have used Kanban template such as Jira,
              Trello and GitLab issues tracking to manage a user request.
            </p>

            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-gray-600 p-6 rounded-lg">
                <p>Frontend Framework</p>
                <ul class="indent-8 list-disc list-inside">
                  <li class="mb-1">Vue.JS</li>
                  <li class="mb-1">Next.JS</li>
                  <li class="mb-1">Nuxt.JS</li>
                </ul>
              </div>

              <div class="bg-gray-600 p-6 rounded-lg">
                <p>Backend Framework</p>
                <ul class="indent-8 list-disc list-inside">
                  <li>Python FASTAPI</li>
                </ul>
              </div>

              <div class="bg-gray-600 p-6 rounded-lg">
                <p>Tools</p>
                <ul class="indent-8 list-disc list-inside">
                  <li>Postman API</li>
                  <li>Swagger</li>
                  <li>CURL</li>
                  <li>Git</li>
                  <li>Jenkins CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article class="mb-6 p-4 sm:p-6 bg-white/10 rounded-lg">
          <h3 class="text-2xl font-bold text-yellow-400">
            <span
              class="inline-block text-yellow-400 font-bold italic transform -skew-x-6"
              style="
                text-shadow:
                  0 0 4px rgba(255, 215, 0, 0.7),
                  0 0 8px rgba(255, 165, 0, 0.5);
              "
            >
              Part-Time:
            </span>

            Information Communication Technology Teacher
          </h3>
          <p class="text-base sm:text-lg text-gray-300">
            Madrasah Muallimin Muhammadiyah
          </p>
          <p class="mt-2">
            Formerly an educator in a private school, I have been teaching
            students that follows the UK IGCSE curriculum.
          </p>
          <p class="mt-2">
            I have provided mentoring to students on programming related
            concepts in computer science and IT class on the basis of Scratch
            programming website for algorithm design and implementation for
            secondary students.
          </p>
          <p class="mt-2">
            Teaching concepts of web development using HTML5 and CSS to students
            in IGCSE curriculum where students are instructed to code simple
            table, headers, lists and background color styling with CSS to make
            their website.
          </p>
          <p class="mt-2">
            Also taught Python and Javascript for Year 10 in terms of computer
            programming development
          </p>
          <p></p>
        </article>

        <article class="mb-6 p-4 sm:p-6 bg-white/10 rounded-lg">
          <h3 class="text-2xl font-bold text-yellow-400">
            <span
              class="inline-block text-yellow-400 font-bold italic transform -skew-x-6"
              style="
                text-shadow:
                  0 0 4px rgba(255, 215, 0, 0.7),
                  0 0 8px rgba(255, 165, 0, 0.5);
              "
              >Intern:</span
            >
            Hardware and Instrumentation Developer
          </h3>
          <p class="text-base sm:text-lg text-gray-300">
            Geoseismal Research Center
          </p>
          <p class="mt-2">
            During my university, I have taken the role of an intern as a
            hardware and instrumentation developer with a core research focus in
            geophysics
          </p>
          <p class="mt-2">
            I developed and assembled geophysical instrumentation for
            self-potential and electrical impedance measurements, focusing on
            reliable data acquisition and signal integrity. This included
            building and soldering sensor wiring and connectors, designing
            circuitry for signal conditioning such as filtering and
            amplification, and constructing porous pot electrodes for field
            measurements.
          </p>
          <p class="mt-2">
            I conducted supervised data acquisition using a DATAQ logging system
            and programmed a single-board computer (SBC) to automate node
            switching through multiplexed relay systems. The system enabled
            efficient self-potential data extraction across multiple measurement
            nodes, improving accuracy and scalability in electrical measurement
            workflows.
          </p>
        </article>
      </section>

      <!-- Experience Section -->
      <!-- <section class="mt-16">
        <h2 class="text-4xl font-bold text-center mb-6">Experience</h2>
        <article
          v-for="experience in experiences"
          :key="experience.company"
          class="mb-6 p-6 bg-white/10 rounded-lg"
        >
          <h3 class="text-2xl font-bold text-yellow-400">
            {{ experience.role }}
          </h3>
          <p class="text-lg text-gray-300">{{ experience.company }}</p>
          <p class="mt-2">{{ experience.description }}</p>
        </article>
      </section> -->
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

useHead({
  title: "About Me - Raditya",
  meta: [
    {
      name: "description",
      content: "Learn more about Raditya, a passionate full-stack developer.",
    },
  ],
});

const helloFromRaditya =
  " Hello, I am Raditya, an aspiring interdisciplinary techpreneur.";
const typedTextHello = ref("");
let isDeleting = false;
let index = 0;

const typeText = () => {
  setTimeout(
    () => {
      if (!isDeleting) {
        if (index < helloFromRaditya.length) {
          typedTextHello.value += helloFromRaditya[index];
          index++;
          typeText();
        } else {
          isDeleting = true;
          setTimeout(typeText, 2000);
        }
      } else {
        if (index > 0) {
          typedTextHello.value = helloFromRaditya.substring(0, index - 1);
          index--;
          typeText();
        } else {
          isDeleting = false;
          setTimeout(typeText, 1000);
        }
      }
    },
    isDeleting ? 50 : 100,
  );
};

const skillText = ref("My Skills".split(""));
const fullText = "Experience";
const displayedText = ref("");

onMounted(() => {
  typeText();

  let i = 0;
  const speed = 150; // milliseconds per letter

  function typeWriter() {
    if (i < fullText.length) {
      displayedText.value += fullText[i];
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});

// Skills Data
const skills = ref([
  { name: "Vue.js", icon: "logos:vue" },
  { name: "Nuxt.js", icon: "logos:nuxt-icon" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Arduino", icon: "logos:arduino" },
  { name: "Linux Operating System", icon: "logos:ubuntu" },
]);

// Experience Data
// const experiences = ref([
//   {
//     role: "Full-Stack Developer",
//     company: "TelkomSigma",
//     description:
//       "Worked on various web apps using Vue, Nuxt, and Next.js. Built REST APIs and integrated with front end systems.",
//   },
//   {
//     role: "ICT Teacher",
//     company: "Madrasah Muallimiin Muhammadiyah Yogyakarta",
//     description:
//       "Highschool IT teacher focusing on simple software development for Year 8-10. Covering the aspect of basic algorithms taught to students. Class involves making scratch game with inputs and loops, and basic web development for Year 10 using HTML & CSS.",
//   },
//   {
//     role: "Blockchain learner (student) and instructor",
//     company: "Gimbalabs Indonesia",
//     description:
//       "Both as a learner and instructor, I facilitated the class of Blockchain based on Cardano protocols presented by Gimbalabs. The program is held in collaboration with Universitas Gadjah Mada.",
//   },
//   {
//     role: "Hardware and Instrumentation Developer",
//     company: "Geoseismal Research Center",
//     description:
//       "Internship program focusing on instrumentation development and hardware assembly of seismic instruments focused on the realm of geophysics and sub surface scanning materials.",
//   },
// ]);
</script>

<style scoped>
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}

.wave {
  display: inline-block;
  animation: wave 1s infinite;
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
