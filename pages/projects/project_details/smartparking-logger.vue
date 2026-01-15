<template>
  <section class="p-10 max-w-5xl mx-auto">
    <!-- HERO -->
    <header class="text-center mb-16">
      <h1 class="text-4xl font-bold text-white">
        Mobile Network Socket Programming
      </h1>
      <p class="text-gray-400 mt-4">Location Logging System</p>
    </header>

    <!-- MOTIVATION -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Project Motivation</h2>
      <p class="text-gray-300 leading-relaxed">
        The rapid growth of location based services (LBS) has increased the
        demand for real time and precise vehicle tracking systems. This project
        utilizes socket programming to enable bidirectional communication
        between mobile devices and servers, allowing efficient vehicle location
        logging and management.
      </p>
    </section>

    <!-- FEATURES -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Core Features</h2>
      <ul class="list-disc list-inside text-gray-300 space-y-2">
        <li>Real-time vehicle location tracking</li>
        <li>Vehicle data logging and analytics</li>
        <li>Last parked location storage</li>
        <li>Unauthorized use detection & alerts</li>
        <li>User-friendly mobile interface</li>
      </ul>
    </section>

    <!-- PROCEDURES -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">System Workflow</h2>
      <ol class="list-decimal list-inside text-gray-300 space-y-2">
        <li>Client app retrieves GPS coordinates</li>
        <li>Location data sent via WebSocket</li>
        <li>Flask server processes requests</li>
        <li>Data stored in a relational database</li>
        <li>Location displayed on a map interface</li>
      </ol>
    </section>

    <!-- TECH STACK -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Technology Stack</h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-gray-800 p-6 rounded-lg">
          <h3 class="font-semibold mb-2">Frontend</h3>
          <ul class="text-gray-300 space-y-1">
            <li>MIT App Inventor (Android)</li>
            <li>GPS & Sensor Integration</li>
            <li>WebSocket Communication</li>
          </ul>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg">
          <h3 class="font-semibold mb-2">Backend</h3>
          <ul class="text-gray-300 space-y-1">
            <li>Python (Flask)</li>
            <li>Flask-SocketIO</li>
            <li>REST API</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ENVIRONMENT -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Development Environment</h2>
      <ul class="text-gray-300 space-y-2">
        <li>OS: Windows / Linux (WSL)</li>
        <li>Database: SQLite / PostgreSQL / MySQL</li>
        <li>Mobile OS: Android</li>
        <li>Optional Debug Device: Raspberry Pi 3</li>
      </ul>
    </section>

    <!-- PROGRAM FLOW -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold mb-4">Program Flow</h2>
      <p class="text-gray-300 leading-relaxed">
        The application collects GPS coordinates from the smartphone and sends
        them to the server via sockets. Error handling is implemented for GPS
        failure, network issues, and database errors. If the server is
        unreachable, data may be cached locally and transmitted once the
        connection is restored.
      </p>
    </section>

    <!-- NAVIGATION -->
    <NuxtLink to="/projects" class="text-blue-400 hover:underline">
      ← Back to Projects
    </NuxtLink>
  </section>
</template>

<script setup>
useHead({
  title: "Socket Programming with Location Tracking",
  meta: [
    {
      name: "description",
      content:
        "Mobile vehicle tracking application using socket programming, Flask backend, and Android client.",
    },
  ],
});
</script>
