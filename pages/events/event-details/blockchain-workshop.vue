<template>
  <section class="max-w-5xl mx-auto px-6 py-16 text-white">
    <!-- HEADER -->
    <header class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Blockchain Workshop — Cardano Ecosystem
      </h1>
      <p class="text-gray-400 max-w-3xl mx-auto">
        A hands-on blockchain workshop mentoring students on the Cardano
        ecosystem — from wallet setup and transactions to NFTs and smart
        contracts.
      </p>
    </header>

    <!-- HERO IMAGE -->
    <div class="mb-16 rounded-2xl overflow-hidden border border-white/10">
      <img
        src=""
        alt="Blockchain Workshop"
        class="w-full h-[240px] sm:h-[360px] object-cover"
      />
    </div>

    <!-- META INFO -->
    <section class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Role</p>
        <p class="font-semibold">Mentor / Trainer</p>
      </div>
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Collaboration</p>
        <p class="font-semibold">Cardano Team</p>
      </div>
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Focus</p>
        <p class="font-semibold">Blockchain & Smart Contracts</p>
      </div>
      <div class="bg-white/5 rounded-xl p-5">
        <p class="text-sm text-gray-400">Format</p>
        <p class="font-semibold">Hands-on Workshop</p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="space-y-14">
      <!-- OVERVIEW -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Workshop Overview</h2>
        <p class="text-gray-300 leading-relaxed">
          This workshop introduced students to the
          <span class="text-green-400 font-semibold">Cardano blockchain</span>
          through practical, guided sessions. Together with colleagues from the
          Cardano ecosystem, we mentored participants on how blockchain works in
          real-world scenarios — not just theory.
        </p>
      </div>

      <!-- PHASES -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Learning Phases</h2>

        <div class="space-y-6">
          <!-- Phase 1 -->
          <div class="bg-white/5 rounded-xl p-6">
            <h3 class="font-semibold text-lg mb-2">
              Phase 1 — Wallets & Fundamentals
            </h3>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>Setting up Cardano wallets</li>
              <li>Understanding ADA, tokens, and native assets</li>
              <li>Wallet addresses and transaction flow</li>
              <li>Types of currencies and token behavior</li>
            </ul>
          </div>

          <!-- Phase 2 -->
          <div class="bg-white/5 rounded-xl p-6">
            <h3 class="font-semibold text-lg mb-2">
              Phase 2 — NFTs & Blockchain Uniqueness
            </h3>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>What makes NFTs unique on the blockchain</li>
              <li>Use cases beyond art (identity, safety, security)</li>
              <li>Minting concepts and asset ownership</li>
            </ul>
          </div>

          <!-- Phase 3 -->
          <div class="bg-white/5 rounded-xl p-6">
            <h3 class="font-semibold text-lg mb-2">
              Phase 3 — Smart Contracts & Networks
            </h3>
            <ul class="list-disc list-inside text-gray-300 space-y-1">
              <li>Introduction to smart contracts</li>
              <li>Pre-production vs production networks</li>
              <li>Testing transactions safely before mainnet</li>
              <li>Using pools and transferring ADA</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- TOOLS -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Tools & Ecosystem</h2>
        <p class="text-gray-300 leading-relaxed">
          Participants were introduced to the Cardano ecosystem, including
          wallets, test networks, pools, and on-chain data. We emphasized
          understanding how blockchain data acts as a transparent and reliable
          database.
        </p>
      </div>

      <!-- GALLERY -->
      <div>
        <h2 class="text-2xl font-semibold mb-6">Workshop Moments</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img
            src=""
            class="rounded-xl object-cover h-60 w-full"
            alt="Workshop photo 1"
          />
          <img
            src=""
            class="rounded-xl object-cover h-60 w-full"
            alt="Workshop photo 2"
          />
        </div>
      </div>

      <!-- IMPACT -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Outcome & Impact</h2>
        <p class="text-gray-300 leading-relaxed">
          By the end of the workshop, students were able to confidently navigate
          wallets, understand blockchain transactions, and experiment with smart
          contracts in test environments — building a strong foundation for
          further blockchain development.
        </p>
      </div>

      <!-- REFLECTION -->
      <div class="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h2 class="text-2xl font-semibold mb-4">My Experience</h2>
        <p class="text-gray-300 leading-relaxed">
          Mentoring this workshop reinforced the importance of breaking down
          complex blockchain concepts into approachable, hands-on learning.
          Collaborating with fellow Cardano team members made the experience
          both technically rich and highly engaging.
        </p>
      </div>
    </section>
  </section>
</template>

<script setup>
useHead({
  title: "Blockchain Workshop — Cardano Ecosystem | Raditya",
  meta: [
    {
      name: "description",
      content:
        "Blockchain workshop mentoring students on the Cardano ecosystem, wallets, NFTs, smart contracts, and network testing.",
    },
  ],
});
</script>
