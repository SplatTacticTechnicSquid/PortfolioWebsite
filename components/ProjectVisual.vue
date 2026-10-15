<script setup lang="ts">
import type { Project } from '~/data/portfolio'
withDefaults(defineProps<{ variant: Project['visual']; label?: string }>(), {
  label: 'Illustrative engineering application interface',
})
</script>

<template>
  <div class="project-visual" :class="`visual-${variant}`">
    <svg viewBox="0 0 640 400" role="img" :aria-label="label" xmlns="http://www.w3.org/2000/svg">
      <g v-if="variant === 'bom'">
        <rect x="57" y="61" width="526" height="290" rx="9" fill="#000000" opacity=".55" />
        <rect x="51" y="53" width="526" height="290" rx="9" fill="#101e2e" stroke="#2a4056" />
        <path d="M51 87h526" stroke="#263b51" />
        <circle cx="68" cy="70" r="3" fill="#49e39b" /><circle cx="79" cy="70" r="3" fill="#375068" /><circle cx="90" cy="70" r="3" fill="#375068" />
        <text x="306" y="74" class="window-title" text-anchor="middle">ENGINEERING / BOM VALIDATION</text>
        <rect x="71" y="106" width="31" height="31" rx="6" fill="#49e39b" />
        <path d="m79 121 6 6 10-13" fill="none" stroke="#092319" stroke-width="2" />
        <text x="115" y="118" class="panel-heading">BOM validation</text>
        <text x="115" y="133" class="muted">TV engineering / automated verification</text>
        <rect x="449" y="111" width="107" height="21" rx="10.5" fill="#173a2d" />
        <circle cx="461" cy="121.5" r="3" fill="#49e39b" /><text x="472" y="125" class="tiny forest">WORKFLOW READY</text>
        <rect x="72" y="157" width="483" height="29" rx="3" fill="#16283b" />
        <text x="85" y="175" class="table-label">DATA SOURCE</text><text x="315" y="175" class="table-label">PROCESS</text><text x="482" y="175" class="table-label">STATUS</text>
        <g v-for="(row, i) in ['TV model data', 'Bill of materials', 'Jira integration']" :key="row">
          <path :d="`M72 ${220 + i * 36}h483`" stroke="#263b51" />
          <rect x="85" :y="197 + i * 36" width="9" height="9" rx="2" fill="#33516a" />
          <text x="105" :y="206 + i * 36" class="body-label">{{ row }}</text>
          <path :d="`M316 ${202 + i * 36}h79`" stroke="#3e7285" stroke-width="4" stroke-linecap="round" />
          <circle cx="502" :cy="202 + i * 36" r="8" fill="#173a2d" />
          <path :d="`m498 ${202 + i * 36} 3 3 5-6`" fill="none" stroke="#49e39b" stroke-width="1.5" />
        </g>
        <circle cx="85" cy="320" r="3" fill="#70cfff" /><text x="96" y="324" class="muted">Jira + engineering data</text>
        <text x="553" y="324" class="tiny" text-anchor="end">ILLUSTRATIVE WORKFLOW</text>
      </g>
      <g v-else-if="variant === 'monitor'">
        <rect x="59" y="58" width="527" height="289" rx="9" fill="#000000" opacity=".5" /><rect x="53" y="51" width="527" height="289" rx="9" fill="#101e2e" stroke="#2a4056" />
        <path d="M53 86h527" stroke="#263b51" /><circle cx="71" cy="69" r="3" fill="#49e39b" /><circle cx="83" cy="69" r="3" fill="#375068" /><circle cx="95" cy="69" r="3" fill="#375068" />
        <text x="316" y="73" class="window-title" text-anchor="middle">TV MODEL / MONITORING</text>
        <text x="77" y="119" class="panel-heading">TV model monitor</text><text x="77" y="137" class="muted">Model datasets · engineering overview</text>
        <rect x="76" y="156" width="145" height="52" rx="4" fill="#16283b" /><text x="90" y="174" class="tiny">MODEL DATA</text><text x="90" y="195" class="metric-label">Connected</text>
        <rect x="232" y="156" width="145" height="52" rx="4" fill="#16283b" /><text x="246" y="174" class="tiny">NEW MODELS</text><text x="246" y="195" class="metric-label">Detected</text>
        <rect x="388" y="156" width="168" height="52" rx="4" fill="#15382c" /><text x="402" y="174" class="tiny">DATABASE CHANGES</text><text x="402" y="195" class="metric-label">Tracked</text>
        <path d="M78 239h477M78 266h477M78 293h477" stroke="#263b51" /><path d="m79 292 39-8 37 4 40-17 38 5 39-26 41 10 41-17 38 9 39-27 40 8 43-14 40 4" fill="none" stroke="#49e39b" stroke-width="2.5" stroke-linejoin="round" />
        <circle cx="474" cy="219" r="5" fill="#70cfff" stroke="#101e2e" stroke-width="2" /><text x="80" y="321" class="muted">Data → detection → notification</text><text x="555" y="321" class="tiny" text-anchor="end">ILLUSTRATIVE DATA</text>
      </g>
      <g v-else-if="variant === 'ai'">
        <path d="M137 127h111m139 0h106M137 127v159h101" fill="none" stroke="#3b6964" stroke-width="1.5" stroke-dasharray="5 5" />
        <rect x="61" y="74" width="160" height="106" rx="7" fill="#101e2e" stroke="#2a4056" /><rect x="78" y="91" width="25" height="28" rx="3" fill="#18392f" /><path d="M85 99h12m-12 5h12m-12 5h8" stroke="#49e39b" /><text x="78" y="139" class="panel-heading">Source data</text><text x="78" y="157" class="muted">Documents &amp; data</text>
        <rect x="266" y="90" width="109" height="76" rx="7" fill="#49e39b" /><path d="m310 110 5 10 11 2-8 8 1 11-9-5-10 5 2-11-8-8 11-2Z" fill="none" stroke="#092319" stroke-width="1.3" /><text x="321" y="154" class="light-label" text-anchor="middle">AI ASSIST</text>
        <rect x="420" y="75" width="157" height="105" rx="7" fill="#101e2e" stroke="#2a4056" /><path d="M438 99h30m-30 7h73m-73 7h58" stroke="#4b708d" stroke-width="3" stroke-linecap="round" /><text x="438" y="139" class="panel-heading">AI answers</text><text x="438" y="157" class="muted">A connected interface</text>
        <rect x="221" y="215" width="337" height="117" rx="8" fill="#101e2e" stroke="#2a4056" /><circle cx="244" cy="238" r="9" fill="#173a2d" /><path d="M241 238h6m-3-3v6" stroke="#49e39b" /><rect x="263" y="232" width="153" height="6" rx="3" fill="#629bb2" /><rect x="263" y="245" width="249" height="4" rx="2" fill="#2b445e" /><rect x="263" y="257" width="219" height="4" rx="2" fill="#2b445e" />
        <rect x="239" y="283" width="301" height="30" rx="4" fill="#192c41" /><text x="251" y="302" class="muted">Ask a question about your data…</text><path d="m514 300 6-6 6 6m-6-6v11" stroke="#70cfff" fill="none" stroke-width="1.5" /><text x="64" y="328" class="tiny">ILLUSTRATIVE AI WORKFLOW</text>
      </g>
      <g v-else-if="variant === 'serial'">
        <rect x="53" y="54" width="528" height="290" rx="8" fill="#081421" /><path d="M53 90h528" stroke="#294159" /><circle cx="72" cy="72" r="3" fill="#49e39b" /><circle cx="84" cy="72" r="3" fill="#355069" /><circle cx="96" cy="72" r="3" fill="#355069" /><text x="318" y="76" class="light-label" text-anchor="middle">TV DEBUG / SERIAL CONSOLE</text>
        <text x="76" y="120" class="terminal muted-terminal">// Browser-to-device communication</text><text x="76" y="150" class="terminal">&gt; browser.open()</text><text x="76" y="174" class="terminal muted-terminal">  Next.js + Web Serial API</text><text x="76" y="207" class="terminal">&gt; connect.serial()</text><text x="76" y="231" class="terminal muted-terminal">  RS-232 → TV engineering interface</text>
        <path d="M77 280h40l8-15 11 29 14-49 14 60 13-27h51l11-14 11 17h64l11-16 11 29 13-47 14 56 14-27h58l11-11 9 13h51" stroke="#49e39b" fill="none" stroke-width="1.7" /><text x="76" y="325" class="light-label">WEB SERIAL API / RS-232</text><circle cx="548" cy="322" r="4" fill="#49e39b" />
      </g>
      <g v-else-if="variant === 'enterprise'">
        <rect x="55" y="53" width="530" height="290" rx="8" fill="#101e2e" stroke="#2a4056" /><path d="M55 88h530" stroke="#263b51" /><circle cx="73" cy="71" r="3" fill="#49e39b" /><circle cx="85" cy="71" r="3" fill="#375068" /><circle cx="97" cy="71" r="3" fill="#375068" /><text x="320" y="75" class="window-title" text-anchor="middle">ENTERPRISE / CONNECTED OPERATIONS</text>
        <text x="77" y="124" class="panel-heading">Connected business operations</text><text x="77" y="143" class="muted">Stakeholder records / assets / documents</text>
        <g v-for="(column, i) in ['PEOPLE', 'RECORDS', 'WORKFLOWS']" :key="column">
          <rect :x="77 + i * 163" y="164" width="150" height="145" rx="4" fill="#16283b" /><circle :cx="92 + i * 163" cy="182" r="3" :fill="i === 2 ? '#70cfff' : '#49e39b'" /><text :x="103 + i * 163" y="186" class="tiny">{{ column }}</text>
          <rect :x="87 + i * 163" y="202" width="130" height="42" rx="3" fill="#101e2e" /><path :d="`M${99 + i * 163} 216h74m-74 12h103`" stroke="#3c607a" stroke-width="3" stroke-linecap="round" />
          <rect :x="87 + i * 163" y="253" width="130" height="42" rx="3" fill="#101e2e" /><path :d="`M${99 + i * 163} 267h98m-98 12h63`" stroke="#3c607a" stroke-width="3" stroke-linecap="round" />
        </g><text x="563" y="329" class="tiny" text-anchor="end">ILLUSTRATIVE INTERFACE</text>
      </g>
      <g v-else>
        <rect x="60" y="60" width="521" height="283" rx="8" fill="#000000" opacity=".5" /><rect x="53" y="52" width="521" height="283" rx="8" fill="#101e2e" stroke="#2a4056" /><path d="M53 87h521" stroke="#263b51" /><circle cx="71" cy="69" r="3" fill="#49e39b" /><circle cx="83" cy="69" r="3" fill="#375068" /><circle cx="95" cy="69" r="3" fill="#375068" /><text x="314" y="74" class="window-title" text-anchor="middle">KNOWLEDGE / A SHARED RESOURCE</text>
        <rect x="71" y="106" width="122" height="208" rx="4" fill="#14273a" /><text x="86" y="131" class="table-label">WORKSPACE</text><rect x="79" y="149" width="106" height="25" rx="3" fill="#1d3e3b" /><text x="91" y="166" class="body-label">Documents</text><text x="91" y="194" class="muted">Resources</text><text x="91" y="222" class="muted">Knowledge</text><path d="M85 271h72m-72 12h55m-55 12h65" stroke="#3d627a" stroke-width="3" stroke-linecap="round" />
        <text x="216" y="132" class="panel-heading">Knowledge workspace</text><rect x="216" y="150" width="335" height="28" rx="4" fill="#192c41" /><circle cx="230" cy="163" r="4" fill="none" stroke="#70cfff" /><path d="m233 166 3 3" stroke="#70cfff" /><text x="247" y="168" class="muted">Find shared documentation</text>
        <g v-for="i in 3" :key="i"><rect x="218" :y="195 + (i - 1) * 38" width="22" height="26" rx="3" fill="#16382c" /><path :d="`M224 ${203 + (i - 1) * 38}h10m-10 5h10m-10 5h7`" stroke="#49e39b" /><path :d="`M254 ${204 + (i - 1) * 38}h${155 - i * 15}m${-(155 - i * 15)} 10h235`" stroke="#3c607a" stroke-width="3" stroke-linecap="round" /></g>
        <text x="551" y="320" class="tiny" text-anchor="end">ILLUSTRATIVE INTERFACE</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.project-visual { width: 100%; overflow: hidden; background-color: #0b1724; background-image: radial-gradient(ellipse at 70% 10%, #49e39b0d, transparent 65%), linear-gradient(#35546e20 1px, transparent 1px), linear-gradient(90deg, #35546e20 1px, transparent 1px); background-size: auto, 32px 32px, 32px 32px; }
.project-visual svg { width: 100%; height: auto; display: block; font-family: inherit; }
.visual-ai { background-color: #0c1a24; }.visual-serial { background-color: #0d1e25; }.visual-enterprise { background-color: #101b2a; }
.window-title { font-family: ui-monospace, monospace; font-size: 9px; font-weight: 500; letter-spacing: 1.4px; fill: #8cabc2; }
.panel-heading { font-size: 15px; font-weight: 600; fill: #e4eef8; letter-spacing: -.3px; }
.muted { font-size: 10px; fill: #90a9bf; }
.tiny { font-size: 8px; letter-spacing: .7px; fill: #8da7bb; }
.forest { fill: #49e39b; }
.table-label { font-size: 8px; letter-spacing: .8px; fill: #8eabc3; }
.body-label { font-size: 10px; fill: #c0d3e3; }
.metric-label { font-size: 15px; fill: #49e39b; font-weight: 600; }
.light-label { font-size: 8px; letter-spacing: 1.2px; fill: #8caec5; }
.visual-ai .light-label { fill: #092319; font-weight: 700; }
.terminal { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 13px; fill: #49e39b; }
.muted-terminal { fill: #8eaabe; font-size: 11px; }
</style>
