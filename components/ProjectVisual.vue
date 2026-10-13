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
        <rect x="57" y="61" width="526" height="290" rx="9" fill="#ccd6c1" opacity=".55" />
        <rect x="51" y="53" width="526" height="290" rx="9" fill="#fafbf5" stroke="#c7d0bf" />
        <path d="M51 87h526" stroke="#dce2d5" />
        <circle cx="68" cy="70" r="3" fill="#b5c1aa" /><circle cx="79" cy="70" r="3" fill="#d2d9ca" /><circle cx="90" cy="70" r="3" fill="#d2d9ca" />
        <text x="306" y="74" class="window-title" text-anchor="middle">ENGINEERING / BOM VALIDATION</text>
        <rect x="71" y="106" width="31" height="31" rx="6" fill="#2d5d46" />
        <path d="m79 121 6 6 10-13" fill="none" stroke="#f4f3ed" stroke-width="2" />
        <text x="115" y="118" class="panel-heading">A clearer path to validation.</text>
        <text x="115" y="133" class="muted">Engineering data, connected.</text>
        <rect x="449" y="111" width="107" height="21" rx="10.5" fill="#e5eedb" />
        <circle cx="461" cy="121.5" r="3" fill="#5d8450" /><text x="472" y="125" class="tiny forest">WORKFLOW READY</text>
        <rect x="72" y="157" width="483" height="29" rx="3" fill="#edf0e6" />
        <text x="85" y="175" class="table-label">DATA SOURCE</text><text x="315" y="175" class="table-label">PROCESS</text><text x="482" y="175" class="table-label">STATUS</text>
        <g v-for="(row, i) in ['TV model data', 'Bill of materials', 'Jira integration']" :key="row">
          <path :d="`M72 ${220 + i * 36}h483`" stroke="#e4e8de" />
          <rect x="85" :y="197 + i * 36" width="9" height="9" rx="2" fill="#e0e7d7" />
          <text x="105" :y="206 + i * 36" class="body-label">{{ row }}</text>
          <path :d="`M316 ${202 + i * 36}h79`" stroke="#c0cfb2" stroke-width="4" stroke-linecap="round" />
          <circle cx="502" :cy="202 + i * 36" r="8" fill="#e2ebd8" />
          <path :d="`m498 ${202 + i * 36} 3 3 5-6`" fill="none" stroke="#4f7552" stroke-width="1.5" />
        </g>
        <circle cx="85" cy="320" r="3" fill="#bf633c" /><text x="96" y="324" class="muted">Less checking. More engineering.</text>
        <text x="553" y="324" class="tiny" text-anchor="end">ILLUSTRATIVE WORKFLOW</text>
      </g>
      <g v-else-if="variant === 'monitor'">
        <rect x="59" y="58" width="527" height="289" rx="9" fill="#c8d4bf" opacity=".5" /><rect x="53" y="51" width="527" height="289" rx="9" fill="#fafbf5" stroke="#c7d0bf" />
        <path d="M53 86h527" stroke="#dce2d5" /><circle cx="71" cy="69" r="3" fill="#b5c1aa" /><circle cx="83" cy="69" r="3" fill="#d2d9ca" /><circle cx="95" cy="69" r="3" fill="#d2d9ca" />
        <text x="316" y="73" class="window-title" text-anchor="middle">TV MODEL / MONITORING</text>
        <text x="77" y="119" class="panel-heading">See what changes.</text><text x="77" y="137" class="muted">Model datasets · engineering overview</text>
        <rect x="76" y="156" width="145" height="52" rx="4" fill="#edf0e6" /><text x="90" y="174" class="tiny">MODEL DATA</text><text x="90" y="195" class="metric-label">Connected</text>
        <rect x="232" y="156" width="145" height="52" rx="4" fill="#edf0e6" /><text x="246" y="174" class="tiny">NEW MODELS</text><text x="246" y="195" class="metric-label">Detected</text>
        <rect x="388" y="156" width="168" height="52" rx="4" fill="#e6eddc" /><text x="402" y="174" class="tiny">DATABASE CHANGES</text><text x="402" y="195" class="metric-label">Tracked</text>
        <path d="M78 239h477M78 266h477M78 293h477" stroke="#e4e8dc" /><path d="m79 292 39-8 37 4 40-17 38 5 39-26 41 10 41-17 38 9 39-27 40 8 43-14 40 4" fill="none" stroke="#588063" stroke-width="2.5" stroke-linejoin="round" />
        <circle cx="474" cy="219" r="5" fill="#bf633c" stroke="#fafbf5" stroke-width="2" /><text x="80" y="321" class="muted">Data → detection → notification</text><text x="555" y="321" class="tiny" text-anchor="end">ILLUSTRATIVE DATA</text>
      </g>
      <g v-else-if="variant === 'ai'">
        <path d="M137 127h111m139 0h106M137 127v159h101" fill="none" stroke="#b9c6ad" stroke-width="1.5" stroke-dasharray="5 5" />
        <rect x="61" y="74" width="160" height="106" rx="7" fill="#f9faf4" stroke="#c3ceba" /><rect x="78" y="91" width="25" height="28" rx="3" fill="#e4ebda" /><path d="M85 99h12m-12 5h12m-12 5h8" stroke="#7a9171" /><text x="78" y="139" class="panel-heading">Your context.</text><text x="78" y="157" class="muted">Documents &amp; data</text>
        <rect x="266" y="90" width="109" height="76" rx="7" fill="#2d5d46" /><path d="m310 110 5 10 11 2-8 8 1 11-9-5-10 5 2-11-8-8 11-2Z" fill="none" stroke="#dfe9d4" stroke-width="1.3" /><text x="321" y="154" class="light-label" text-anchor="middle">AI ASSIST</text>
        <rect x="420" y="75" width="157" height="105" rx="7" fill="#f9faf4" stroke="#c3ceba" /><path d="M438 99h30m-30 7h73m-73 7h58" stroke="#adbd9f" stroke-width="3" stroke-linecap="round" /><text x="438" y="139" class="panel-heading">Useful answers.</text><text x="438" y="157" class="muted">A connected interface</text>
        <rect x="221" y="215" width="337" height="117" rx="8" fill="#fafbf5" stroke="#c3ceba" /><circle cx="244" cy="238" r="9" fill="#e3ebd9" /><path d="M241 238h6m-3-3v6" stroke="#54734b" /><rect x="263" y="232" width="153" height="6" rx="3" fill="#bccbac" /><rect x="263" y="245" width="249" height="4" rx="2" fill="#e1e7d9" /><rect x="263" y="257" width="219" height="4" rx="2" fill="#e1e7d9" />
        <rect x="239" y="283" width="301" height="30" rx="4" fill="#eef1e7" /><text x="251" y="302" class="muted">Ask a question about your data…</text><path d="m514 300 6-6 6 6m-6-6v11" stroke="#6f8661" fill="none" stroke-width="1.5" /><text x="64" y="328" class="tiny">ILLUSTRATIVE AI WORKFLOW</text>
      </g>
      <g v-else-if="variant === 'serial'">
        <rect x="53" y="54" width="528" height="290" rx="8" fill="#21392e" /><path d="M53 90h528" stroke="#415346" /><circle cx="72" cy="72" r="3" fill="#729369" /><circle cx="84" cy="72" r="3" fill="#52684c" /><circle cx="96" cy="72" r="3" fill="#52684c" /><text x="318" y="76" class="light-label" text-anchor="middle">TV DEBUG / SERIAL CONSOLE</text>
        <text x="76" y="120" class="terminal muted-terminal">// A direct line to the hardware</text><text x="76" y="150" class="terminal">&gt; browser.open()</text><text x="76" y="174" class="terminal muted-terminal">  Next.js + Web Serial API</text><text x="76" y="207" class="terminal">&gt; connect.serial()</text><text x="76" y="231" class="terminal muted-terminal">  RS-232 → TV engineering interface</text>
        <path d="M77 280h40l8-15 11 29 14-49 14 60 13-27h51l11-14 11 17h64l11-16 11 29 13-47 14 56 14-27h58l11-11 9 13h51" stroke="#b5d38b" fill="none" stroke-width="1.7" /><text x="76" y="325" class="light-label">HARDWARE, MEET THE BROWSER.</text><circle cx="548" cy="322" r="4" fill="#bf8059" />
      </g>
      <g v-else-if="variant === 'enterprise'">
        <rect x="55" y="53" width="530" height="290" rx="8" fill="#f9faf4" stroke="#c7d0bf" /><path d="M55 88h530" stroke="#dce2d5" /><circle cx="73" cy="71" r="3" fill="#b5c1aa" /><circle cx="85" cy="71" r="3" fill="#d2d9ca" /><circle cx="97" cy="71" r="3" fill="#d2d9ca" /><text x="320" y="75" class="window-title" text-anchor="middle">ENTERPRISE / CONNECTED OPERATIONS</text>
        <text x="77" y="124" class="panel-heading">Bring the moving parts together.</text><text x="77" y="143" class="muted">People, records, and business workflows.</text>
        <g v-for="(column, i) in ['PEOPLE', 'RECORDS', 'WORKFLOWS']" :key="column">
          <rect :x="77 + i * 163" y="164" width="150" height="145" rx="4" fill="#edf0e6" /><circle :cx="92 + i * 163" cy="182" r="3" :fill="i === 2 ? '#bf633c' : '#708969'" /><text :x="103 + i * 163" y="186" class="tiny">{{ column }}</text>
          <rect :x="87 + i * 163" y="202" width="130" height="42" rx="3" fill="#fafbf5" /><path :d="`M${99 + i * 163} 216h74m-74 12h103`" stroke="#c3cfb8" stroke-width="3" stroke-linecap="round" />
          <rect :x="87 + i * 163" y="253" width="130" height="42" rx="3" fill="#fafbf5" /><path :d="`M${99 + i * 163} 267h98m-98 12h63`" stroke="#c3cfb8" stroke-width="3" stroke-linecap="round" />
        </g><text x="563" y="329" class="tiny" text-anchor="end">ILLUSTRATIVE INTERFACE</text>
      </g>
      <g v-else>
        <rect x="60" y="60" width="521" height="283" rx="8" fill="#c9d5bd" opacity=".5" /><rect x="53" y="52" width="521" height="283" rx="8" fill="#fafbf5" stroke="#c7d0bf" /><path d="M53 87h521" stroke="#dce2d5" /><circle cx="71" cy="69" r="3" fill="#b5c1aa" /><circle cx="83" cy="69" r="3" fill="#d2d9ca" /><circle cx="95" cy="69" r="3" fill="#d2d9ca" /><text x="314" y="74" class="window-title" text-anchor="middle">KNOWLEDGE / A SHARED RESOURCE</text>
        <rect x="71" y="106" width="122" height="208" rx="4" fill="#e9eedf" /><text x="86" y="131" class="table-label">WORKSPACE</text><rect x="79" y="149" width="106" height="25" rx="3" fill="#d9e3cc" /><text x="91" y="166" class="body-label">Documents</text><text x="91" y="194" class="muted">Resources</text><text x="91" y="222" class="muted">Knowledge</text><path d="M85 271h72m-72 12h55m-55 12h65" stroke="#bfceb1" stroke-width="3" stroke-linecap="round" />
        <text x="216" y="132" class="panel-heading">Knowledge, within reach.</text><rect x="216" y="150" width="335" height="28" rx="4" fill="#eff2e9" /><circle cx="230" cy="163" r="4" fill="none" stroke="#7a8e6f" /><path d="m233 166 3 3" stroke="#7a8e6f" /><text x="247" y="168" class="muted">Find shared documentation</text>
        <g v-for="i in 3" :key="i"><rect x="218" :y="195 + (i - 1) * 38" width="22" height="26" rx="3" fill="#e5eddc" /><path :d="`M224 ${203 + (i - 1) * 38}h10m-10 5h10m-10 5h7`" stroke="#91a480" /><path :d="`M254 ${204 + (i - 1) * 38}h${155 - i * 15}m${-(155 - i * 15)} 10h235`" stroke="#c4d0b8" stroke-width="3" stroke-linecap="round" /></g>
        <text x="551" y="320" class="tiny" text-anchor="end">ILLUSTRATIVE INTERFACE</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.project-visual { width: 100%; overflow: hidden; background-color: #e7ecdf; background-image: linear-gradient(#d6ddcf55 1px, transparent 1px), linear-gradient(90deg, #d6ddcf55 1px, transparent 1px); background-size: 32px 32px; }
.project-visual svg { width: 100%; height: auto; display: block; font-family: inherit; }
.visual-ai { background-color: #e9ebe0; }.visual-serial { background-color: #dde4d6; }.visual-enterprise { background-color: #ebe9dd; }
.window-title { font-size: 9px; font-weight: 500; letter-spacing: 1.6px; fill: #718064; }.panel-heading { font-size: 15px; font-weight: 550; fill: #263d2c; letter-spacing: -.4px; }.muted { font-size: 10px; fill: #7e8b73; }.tiny { font-size: 8px; letter-spacing: .7px; fill: #7a886e; }.forest { fill: #557447; }.table-label { font-size: 8px; letter-spacing: .8px; fill: #758169; }.body-label { font-size: 10px; fill: #4f6145; }.metric-label { font-size: 15px; fill: #3a5435; }.light-label { font-size: 8px; letter-spacing: 1.2px; fill: #b7c8a8; }.terminal { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 13px; fill: #c5d9b1; }.muted-terminal { fill: #83997a; font-size: 11px; }
</style>
