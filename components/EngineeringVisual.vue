<template>
  <div class="engineering-visual" role="img" aria-label="Illustration connecting data, web applications, and physical hardware">
    <div class="visual-caption"><span>SOFTWARE × SYSTEMS</span><span>FIG. 01</span></div>
    <svg viewBox="0 0 520 440" fill="none" aria-hidden="true">
      <path d="M0 221H78V168H122M520 125H449V188H412M264 0V85H312V140M170 440V359H211V327M520 340H449V298H407M0 360H76V293H122" stroke="#b7c7b0" stroke-width="1.2"/>
      <path class="signal-line" d="M0 221H78V168H122M520 340H449V298H407" stroke="#588364" stroke-width="2" stroke-dasharray="5 90"/>
      <circle cx="78" cy="221" r="4" fill="#e9efe2" stroke="#7c9b78"/><circle cx="449" cy="298" r="4" fill="#e9efe2" stroke="#7c9b78"/>
      <path d="M84 105H151M117.5 71V138M394 372H449M421.5 345V399" stroke="#cad4c1"/>
      <circle cx="260" cy="228" r="170" stroke="#ccd7c2" stroke-dasharray="3 7"/>
      <rect x="122" y="154" width="292" height="184" rx="8" fill="#c2cdb9"/>
      <rect x="109" y="139" width="292" height="184" rx="8" fill="#fbfcf7" stroke="#81977c"/>
      <path d="M110 169H400" stroke="#d7ded0"/><circle cx="125" cy="154" r="2.5" fill="#afc1a2"/><circle cx="136" cy="154" r="2.5" fill="#d3dacb"/><circle cx="147" cy="154" r="2.5" fill="#d3dacb"/>
      <text x="265" y="157" fill="#75836d" font-family="monospace" font-size="7">ENGINEERING WORKSPACE</text>
      <rect x="124" y="183" width="45" height="122" rx="3" fill="#edf1e7"/>
      <rect x="133" y="195" width="26" height="4" rx="2" fill="#92a887"/><rect x="133" y="211" width="20" height="3" rx="1.5" fill="#cad5c2"/><rect x="133" y="224" width="24" height="3" rx="1.5" fill="#cad5c2"/><rect x="133" y="237" width="17" height="3" rx="1.5" fill="#cad5c2"/>
      <text x="183" y="196" fill="#2d5d46" font-family="monospace" font-size="8">A LITTLE LESS MANUAL.</text>
      <rect x="183" y="208" width="59" height="36" rx="3" fill="#e7ecdf"/><rect x="249" y="208" width="59" height="36" rx="3" fill="#e7ecdf"/><rect x="315" y="208" width="70" height="36" rx="3" fill="#2d5d46"/>
      <path d="M196 229L203 221L210 226L227 216" stroke="#6f8d61" stroke-width="1.5"/>
      <text x="262" y="230" fill="#2d5d46" font-family="monospace" font-size="13">{ }</text>
      <path d="M334 226L340 232L351 219" stroke="#dce9ca" stroke-width="2"/><text x="359" y="229" fill="#dce9ca" font-family="monospace" font-size="6">OK</text>
      <path d="M184 258H383M184 281H383M184 302H383" stroke="#e3e9dc"/>
      <path d="M185 294L204 294L219 282L237 286L257 269L282 274L300 264L321 269L348 257L382 257" stroke="#618359" stroke-width="1.5"/>
      <circle cx="382" cy="257" r="3" fill="#b85430"/>
      <rect x="33" y="86" width="115" height="48" rx="5" fill="#f4f3ed" stroke="#bfccb5"/>
      <rect x="44" y="98" width="24" height="24" rx="4" fill="#e2e8d8"/><path d="M51 105L47 110L51 115M61 105L65 110L61 115M58 103L54 117" stroke="#527348" stroke-width="1.2"/>
      <text x="77" y="107" fill="#243d2a" font-family="monospace" font-size="8">WEB APPS</text><text x="77" y="119" fill="#75836d" font-family="monospace" font-size="6">IDEAS → INTERFACES</text>
      <rect x="337" y="71" width="117" height="52" rx="5" fill="#2d5d46"/>
      <text x="350" y="89" fill="#dbe6cd" font-family="monospace" font-size="7">CONNECTED THINKING</text><text x="350" y="108" fill="#f4f3ed" font-family="monospace" font-size="13">&lt;build /&gt;</text>
      <path d="M364 123V139" stroke="#7c9b78"/>
      <rect x="304" y="353" width="155" height="50" rx="5" fill="#f4f3ed" stroke="#bfccb5"/>
      <rect x="317" y="364" width="27" height="27" rx="3" fill="#dce5d0"/><rect x="324" y="371" width="13" height="13" rx="1" stroke="#527348"/><path d="M327 367V371M334 367V371M327 384V388M334 384V388M320 374H324M320 381H324M337 374H341M337 381H341" stroke="#527348"/>
      <text x="354" y="374" fill="#243d2a" font-family="monospace" font-size="8">REAL-WORLD SYSTEMS</text><text x="354" y="387" fill="#75836d" font-family="monospace" font-size="6">DATA ↔ HARDWARE</text>
      <circle cx="79" cy="307" r="6" fill="#b85430"/><circle cx="79" cy="307" r="11" stroke="#b85430" stroke-opacity=".25"/>
    </svg>
    <div class="visual-footer"><span class="visual-dot"></span> From an idea to something that works.<span class="visual-cross" aria-hidden="true">+</span></div>
  </div>
</template>

<style scoped>
.engineering-visual { position: relative; background-color: #e7ecdf; background-image: radial-gradient(#bfccb7 0.65px, transparent .65px); background-size: 14px 14px; border: 1px solid #d7dfcf; border-radius: 8px; overflow: hidden; }
.visual-caption { display: flex; justify-content: space-between; padding: 24px 24px 0; color: #64795c; font: 8px/1.4 var(--font-mono); letter-spacing: .1em; }
svg { display: block; width: 100%; height: auto; }
.visual-footer { display: flex; align-items: center; gap: 8px; padding: 0 23px 23px; color: #64795c; font: 9px/1.5 var(--font-mono); }
.visual-dot { flex-shrink: 0; width: 5px; height: 5px; border-radius: 50%; background: var(--green); }
.visual-cross { margin-left: auto; font-size: 18px; }
.signal-line { animation: signal 8s linear infinite; }
@keyframes signal { to { stroke-dashoffset: -380; } }
</style>
