<template>
  <div class="portfolio-home">
    <section class="hero" aria-labelledby="intro-heading">
      <div class="hero-grid-lines" aria-hidden="true"></div>
      <div class="site-container hero-layout">
        <div class="hero-copy">
          <p class="hello"><span aria-hidden="true">👋</span> Hi, I’m</p>
          <h1 id="intro-heading">Raditya Rifqi<br /><span>Pratama.</span></h1>
          <h2>Full-stack Developer</h2>
          <p class="hero-specialty">Digital transformation <span>·</span> AI applications <span>·</span> Electronics</p>
          <p class="hero-description">I build enterprise web applications and engineering tools that connect software, data, and hardware.</p>
          <p class="current-role"><span class="status-dot" aria-hidden="true"></span> Junior Research Engineer at <strong>LG Electronics R&amp;D</strong></p>
          <div class="hero-actions">
            <a :href="cvPath" class="button button-primary" download><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 3v10m-4-4 4 4 4-4M4 13v4h12v-4" /></svg>Download CV</a>
            <NuxtLink to="/projects" class="button button-secondary">View projects <span aria-hidden="true">↗</span></NuxtLink>
          </div>
          <div class="hero-socials"><a :href="profile.github" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 6v-4a3.5 3.5 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.6 5.6 0 0 0-1.5-3.9 5.1 5.1 0 0 0-.1-3.8S18 0 15 1.8a13.4 13.4 0 0 0-7 0C5 0 3.9.3 3.9.3a5.1 5.1 0 0 0-.1 3.8A5.6 5.6 0 0 0 2.3 8c0 5.7 3.4 6.9 6.7 7.3A3.5 3.5 0 0 0 8 18v4" transform="translate(1 1) scale(.9)" /></svg>GitHub</a><a :href="'mailto:' + profile.email"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg>Email me</a><span class="location"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>Indonesia</span></div>
        </div>
        <div class="profile-terminal">
          <div class="terminal-bar"><div class="window-dots" aria-hidden="true"><i></i><i></i><i></i></div><span>raditya / profile.ts</span><span class="terminal-code" aria-hidden="true">&lt;/&gt;</span></div>
          <div class="profile-identity">
            <div class="identity-orbit" aria-hidden="true"><div class="identity-orbit-inner"></div><div class="identity-monogram">R<span>P</span><small>&lt;/&gt;</small></div><span class="orbit-tag orbit-tag-a">{ }</span><span class="orbit-tag orbit-tag-b">01</span><span class="orbit-tag orbit-tag-c">↗</span></div>
            <span class="identity-label">DEVELOPER &amp; ENGINEER</span>
          </div>
          <div class="terminal-code-block">
            <p class="terminal-command"><span>raditya@portfolio</span>:~$ whoami<span class="cursor" aria-hidden="true"></span></p>
            <dl><div><dt>role</dt><dd>Full-stack Developer</dd></div><div><dt>current</dt><dd>LG Electronics R&amp;D</dd></div><div><dt>previous</dt><dd>Telkomsigma</dd></div><div><dt>education</dt><dd>Electronics &amp; Instrumentation</dd></div></dl>
          </div>
          <div class="terminal-bottom"><span><i aria-hidden="true"></i> Web · AI · Hardware</span><span>TypeScript / Python</span></div>
        </div>
      </div>
    </section>

    <section class="site-container quick-facts" aria-label="Profile at a glance">
      <div><strong>2<span>+</span></strong><p>Years in enterprise development</p></div>
      <div><strong>{{ projects.length.toString().padStart(2, '0') }}</strong><p>Professional projects showcased</p></div>
      <div><strong>3.75<span>/4</span></strong><p>GPA · Universitas Gadjah Mada</p></div>
      <NuxtLink to="/projects/project_details/bom-automation"><strong>&lt;10<span>min</span></strong><p>BOM checks, down from ~2 days <span aria-hidden="true">↗</span></p></NuxtLink>
    </section>

    <div class="site-container section-jumps" aria-label="Homepage sections"><span>QUICK VIEW</span><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#education">Education</a></div>

    <section id="projects" class="site-container home-section">
      <div class="section-top"><div><p class="eyebrow"><span aria-hidden="true">01 /</span> Things I’ve built</p><h2 class="section-heading">Featured <span>projects.</span></h2></div><NuxtLink to="/projects" class="button button-link">All {{ projects.length }} projects <span aria-hidden="true">↗</span></NuxtLink></div>
      <p class="section-description">A selection of my work in engineering automation, AI-enabled applications, and hardware integration.</p>
      <div class="featured-grid"><ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" /></div>
    </section>

    <section id="experience" class="experience-section">
      <div class="site-container home-section">
        <div class="section-top"><div><p class="eyebrow"><span aria-hidden="true">02 /</span> Professional background</p><h2 class="section-heading">Work <span>experience.</span></h2></div><NuxtLink to="/about#experience" class="button button-link">Full experience <span aria-hidden="true">↗</span></NuxtLink></div>
        <div class="experience-grid">
          <article class="experience-card"><div class="company-row"><span class="company-icon lg" aria-hidden="true">LG</span><div><h3>LG Electronics R&amp;D</h3><span>Cikarang, Indonesia</span></div><span class="current-badge">Current</span></div><h4>Junior Research Engineer</h4><p class="experience-focus">DX / AX · Digital Transformation Developer</p><p class="period">Apr 2026 — Present</p><ul><li>Automated BOM validation for hundreds of TV models: ~2 working days to under 10 minutes.</li><li>Built model monitoring with Next.js, PostgreSQL, and Prisma.</li><li>Connected browser-based debugging to TV hardware through Web Serial and RS-232.</li></ul><NuxtLink to="/projects/project_details/bom-automation">View engineering projects <span aria-hidden="true">↗</span></NuxtLink></article>
          <article class="experience-card"><div class="company-row"><span class="company-icon sigma" aria-hidden="true">t<span>s</span></span><div><h3>Telkomsigma</h3><span>Yogyakarta, Indonesia</span></div></div><h4>Junior Programmer</h4><p class="experience-focus">Enterprise applications &amp; AI interfaces</p><p class="period">Sep 2024 — Apr 2026</p><ul><li>Built frontend and chatbot features for SGN’s AI sugarcane-inspection platform.</li><li>Developed a Nuxt-based RAG chatbot with conversation and document management.</li><li>Contributed to CMDB, CRM, and knowledge-management applications.</li></ul><NuxtLink to="/projects/project_details/ai-sugarcane-inspection">View enterprise projects <span aria-hidden="true">↗</span></NuxtLink></article>
        </div>
      </div>
    </section>

    <section id="skills" class="site-container home-section skills-section">
      <div class="section-top"><div><p class="eyebrow"><span aria-hidden="true">03 /</span> Tools I work with</p><h2 class="section-heading">Technical <span>skills.</span></h2></div><NuxtLink to="/about#toolkit" class="button button-link">Complete toolkit <span aria-hidden="true">↗</span></NuxtLink></div>
      <div class="skill-cards"><article v-for="group in homeSkills" :key="group.title"><span class="skill-icon" aria-hidden="true">{{ group.symbol }}</span><h3>{{ group.title }}</h3><div><span v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</span></div></article></div>
    </section>

    <section id="education" class="site-container credentials-section">
      <article class="education-card"><p class="eyebrow">Education</p><h2>Universitas Gadjah Mada</h2><p>B.Sc. Electronics &amp; Instrumentation</p><div class="education-meta"><span>2020 — 2024</span><strong>GPA 3.75 / 4.00</strong></div><p class="education-detail">Instrumentation, control systems, embedded systems, industrial automation, and programming.</p><NuxtLink to="/about#education" class="button button-link">Education &amp; background <span aria-hidden="true">↗</span></NuxtLink></article>
      <article class="certifications-card"><p class="eyebrow">Certifications</p><h2>Certified foundations</h2><div class="certification-row"><span class="cert-icon google" aria-hidden="true">G</span><div><h3>Google Cybersecurity</h3><p>Professional Certificate · Feb 2026</p></div><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg></div><div class="certification-row"><span class="cert-icon microsoft" aria-hidden="true">⊞</span><div><h3>Microsoft Azure AI-900</h3><p>AI Fundamentals · Sep 2025</p></div><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg></div><NuxtLink to="/about#certifications" class="button button-link">All certifications <span aria-hidden="true">↗</span></NuxtLink></article>
    </section>

    <section class="site-container contact-band"><div><p class="eyebrow">Get in touch</p><h2>Let’s connect<span>.</span></h2><p>For opportunities, projects, or a conversation about technology.</p></div><div class="contact-band-actions"><a :href="'mailto:' + profile.email" class="button button-primary">Email me <span aria-hidden="true">↗</span></a><a :href="cvPath" class="button button-secondary" download>Download CV <span aria-hidden="true">↓</span></a></div></section>
  </div>
</template>

<script setup lang="ts">
import { profile, projects } from '~/data/portfolio';
const featuredIds = ['bom-automation', 'tv-model-monitoring', 'ai-sugarcane-inspection', 'tv-debugging-tool'];
const featuredProjects = featuredIds.map(id => projects.find(project => project.id === id)!);
const cvPath = useRuntimeConfig().app.baseURL + profile.cvUrl.replace(/^\//, '');
const homeSkills = [
  { title: 'Frontend development', symbol: '</>', skills: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'TypeScript'] },
  { title: 'Backend & data', symbol: '{ }', skills: ['PostgreSQL', 'Prisma', 'FastAPI', 'REST APIs', 'Python'] },
  { title: 'Tools & delivery', symbol: '⌘', skills: ['Git', 'GitLab CI/CD', 'Jenkins', 'Jira', 'Linux'] },
  { title: 'Hardware integration', symbol: '⌁', skills: ['Web Serial API', 'RS-232', 'Arduino', 'Raspberry Pi', 'C++'] },
];
useSeoMeta({
  title: 'Full-stack Developer & Engineer',
  description: 'Raditya Rifqi Pratama — full-stack developer and Junior Research Engineer at LG Electronics R&D. View enterprise projects, technical skills, experience, and download my CV.',
  ogTitle: 'Raditya Rifqi Pratama — Developer Portfolio',
  ogDescription: 'Full-stack development, AI applications, and engineering automation. Projects and professional experience at LG Electronics R&D and Telkomsigma.',
});
</script>

<style scoped>
.hero { position: relative; overflow: hidden; background: radial-gradient(ellipse at 80% 40%, #124b3633 0%, transparent 49%), radial-gradient(ellipse at 12% 0%, #182e5133, transparent 60%); }
.hero-grid-lines { position: absolute; inset: 0; background-image: linear-gradient(#455b7610 1px, transparent 1px), linear-gradient(90deg, #455b7610 1px, transparent 1px); background-size: 56px 56px; mask-image: linear-gradient(to bottom, black, transparent); pointer-events: none; }
.hero-layout { position: relative; display: grid; grid-template-columns: 1.2fr .9fr; gap: 84px; align-items: center; padding-block: 68px 61px; }
.hello { display: flex; align-items: center; gap: 9px; font: 14px/1.5 var(--font-mono); color: var(--muted); margin-bottom: 14px; }
.hello > span { font-size: 20px; }
h1 { font-size: clamp(49px, 5.2vw, 72px); letter-spacing: -.045em; font-weight: 750; line-height: 1.06; }
h1 > span { color: var(--green); }
.hero-copy > h2 { font-size: 24px; letter-spacing: -.6px; font-weight: 600; margin: 22px 0 9px; }
.hero-specialty { display: flex; flex-wrap: wrap; gap: 7px; font: 11px/1.7 var(--font-mono); color: var(--accent); }
.hero-specialty span { color: #52647d; }
.hero-description { font-size: 14px; line-height: 1.85; color: var(--muted); max-width: 465px; margin: 20px 0 16px; }
.current-role { display: flex; align-items: center; flex-wrap: wrap; gap: 4px; color: var(--muted); font-size: 11px; }
.current-role strong { font-weight: 500; color: #d8e4f2; }
.status-dot { width: 6px; height: 6px; flex-shrink: 0; border-radius: 50%; background: var(--green); box-shadow: 0 0 12px #49e39b70; margin-right: 4px; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 26px; }
.hero-actions svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.5; }
.hero-socials { display: flex; align-items: center; gap: 23px; color: var(--muted); margin-top: 22px; font-size: 11px; }
.hero-socials > a, .hero-socials .location { display: inline-flex; align-items: center; gap: 7px; }
.hero-socials a:hover { color: var(--green); }
.hero-socials svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 1.5; }
.profile-terminal { border: 1px solid #324758; border-radius: 13px; background: linear-gradient(135deg, #142236e6, #0b1625f5); box-shadow: 0 26px 80px #00000030, 0 0 70px #2aa5760b; transform: rotate(1deg); }
.terminal-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 15px 17px; border-bottom: 1px solid #263548; font: 10px/1.5 var(--font-mono); color: #8596ad; }
.window-dots { display: flex; gap: 5px; }
.window-dots i { width: 7px; height: 7px; border-radius: 50%; background: #f37575; }
.window-dots i:nth-child(2) { background: #e6bf64; }.window-dots i:nth-child(3) { background: #5fc391; }
.terminal-code { color: var(--green); font-size: 12px; }
.profile-identity { padding: 21px 16px 16px; text-align: center; background: radial-gradient(ellipse at center, #2bbb7d12, transparent 68%); }
.identity-orbit { position: relative; width: 194px; height: 194px; margin: 0 auto; display: grid; place-items: center; border: 1px dashed #294b43; border-radius: 50%; }
.identity-orbit-inner { position: absolute; inset: 17px; border: 1px solid #30504760; border-radius: 50%; }
.identity-monogram { position: relative; display: flex; align-items: center; justify-content: center; width: 126px; height: 126px; background: linear-gradient(140deg, #204938, #102a29); border: 1px solid #4edc9260; box-shadow: inset 0 0 35px #49e39b0c, 0 0 45px #49e39b0c; border-radius: 27px; color: #edf8f2; font: 700 46px/1 var(--font-mono); letter-spacing: -5px; }
.identity-monogram > span { color: var(--green); }
.identity-monogram small { position: absolute; right: -11px; bottom: -10px; border: 1px solid #365c4c; border-radius: 7px; padding: 9px; font: 12px/1 var(--font-mono); letter-spacing: -1px; color: var(--green); background: #11271f; }
.orbit-tag { position: absolute; font: 12px/1 var(--font-mono); color: #6cc5a7; padding: 6px; background: #111f2a; border-radius: 5px; }
.orbit-tag-a { top: 14px; left: 9px; }.orbit-tag-b { bottom: 12px; left: 9px; color: #73c6ee; }.orbit-tag-c { top: 40px; right: -1px; color: #73c6ee; }
.identity-label { display: block; margin-top: 12px; color: #80ad9b; font: 8px/1.5 var(--font-mono); letter-spacing: .17em; }
.terminal-code-block { padding: 5px 24px 21px; font: 10px/1.8 var(--font-mono); }
.terminal-command { color: #a1b0c3; margin-bottom: 13px; }.terminal-command > span:first-child { color: var(--green); }
.cursor { display: inline-block; height: 12px; width: 5px; background: var(--green); margin-left: 5px; vertical-align: -2px; animation: blink 1.3s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }
.terminal-code-block dl { display: flex; flex-direction: column; gap: 5px; }.terminal-code-block dl > div { display: flex; gap: 13px; }
.terminal-code-block dt { width: 64px; color: #7f92ac; flex-shrink: 0; }.terminal-code-block dd { color: #c8d9ec; }.terminal-code-block dl > div:first-child dd { color: var(--accent); }
.terminal-bottom { display: flex; justify-content: space-between; gap: 8px; border-top: 1px solid #263548; padding: 11px 16px; color: #91a4b9; font: 8px/1.5 var(--font-mono); }
.terminal-bottom > span:first-child { display: flex; align-items: center; gap: 6px; }.terminal-bottom i { width: 5px; height: 5px; background: var(--green); border-radius: 50%; }
.quick-facts { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--line); border-radius: 9px; background: #101b2bba; }
.quick-facts > * { padding: 24px 26px; position: relative; }.quick-facts > * + * { border-left: 1px solid var(--line); }
.quick-facts strong { display: block; color: var(--ink); font-size: 31px; font-weight: 650; letter-spacing: -1px; line-height: 1.2; }.quick-facts strong > span { color: var(--green); font-size: 19px; margin-left: 3px; }
.quick-facts p { margin-top: 10px; font-size: 10px; color: var(--muted); }.quick-facts p > span { color: var(--green); }.quick-facts > a:hover { background: #19342840; }
.section-jumps { display: flex; align-items: center; gap: 27px; padding-block: 22px; border-bottom: 1px solid var(--line); font-size: 11px; color: var(--muted); }
.section-jumps > span { font: 9px/1.5 var(--font-mono); color: #7990aa; margin-right: auto; letter-spacing: .09em; }.section-jumps a:hover { color: var(--green); }
.home-section { padding-block: 64px; }.section-top { display: flex; align-items: flex-end; justify-content: space-between; gap: 25px; }.section-top .eyebrow > span { color: #68977e; margin-right: 8px; }.section-top h2 > span { color: var(--green); }.section-top .eyebrow { margin-bottom: 10px; }
.section-description { font-size: 13px; color: var(--muted); margin: 15px 0 28px; max-width: 630px; line-height: 1.8; }
.featured-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
.experience-section { background: #0c1623; border-block: 1px solid #1c2b3d; }.experience-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-top: 30px; }
.experience-card { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 27px; }.company-row { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }.company-icon { display: grid; place-items: center; width: 43px; height: 43px; border: 1px solid #593248; border-radius: 10px; background: #341b2e; color: #ff9bbe; font-size: 15px; font-weight: 650; }.company-icon.sigma { display: flex; justify-content: center; gap: 1px; border-color: #573036; background: #321f28; font-size: 21px; color: #fa969b; }.sigma > span { color: #e5eaf1; }.company-row h3 { font-weight: 650; font-size: 16px; line-height: 1.4; letter-spacing: -.3px; }.company-row > div > span { font-size: 10px; color: var(--muted); }.current-badge { color: var(--green); background: #16342a; font: 9px/1.4 var(--font-mono); border: 1px solid #2b5944; border-radius: 4px; padding: 5px 8px; margin-left: auto; }
.experience-card h4 { font-size: 18px; font-weight: 600; letter-spacing: -.35px; }.experience-focus { color: var(--muted); font-size: 11px; margin-top: 5px; }.period { color: var(--green); font: 10px/1.7 var(--font-mono); margin-top: 12px; }
.experience-card ul { display: flex; flex-direction: column; gap: 10px; border-top: 1px solid var(--line); padding-top: 19px; margin-top: 18px; }.experience-card li { position: relative; padding-left: 15px; font-size: 12px; color: #b1bed0; line-height: 1.8; }.experience-card li::before { content: '›'; position: absolute; left: 0; top: 0; color: var(--green); }
.experience-card > a { display: inline-flex; gap: 10px; color: var(--green); font-size: 11px; margin-top: 22px; }.experience-card > a:hover { text-decoration: underline; text-underline-offset: 4px; }
.skill-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 30px; }.skill-cards article { border: 1px solid var(--line); border-radius: 9px; background: var(--surface); padding: 23px 20px; }.skill-icon { display: grid; place-items: center; width: 36px; height: 36px; color: var(--green); font: 18px/1 var(--font-mono); background: #173128; border: 1px solid #2a4d3d; border-radius: 8px; margin-bottom: 18px; }.skill-cards article:nth-child(even) .skill-icon { color: var(--accent); background: #132c3c; border-color: #28475b; }.skill-cards h3 { font-size: 13px; font-weight: 650; margin-bottom: 15px; }.skill-cards article > div { display: flex; flex-wrap: wrap; gap: 6px; }.skill-cards .tag { font-size: 9px; padding: 4px 7px; }
.credentials-section { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; padding-bottom: 64px; }.credentials-section > article { background: linear-gradient(130deg, #121f2e, #101b2b); border: 1px solid var(--line); border-radius: 10px; padding: 28px; }.credentials-section h2 { font-size: 21px; font-weight: 650; letter-spacing: -.5px; line-height: 1.3; }.education-card > p:not(.eyebrow) { color: var(--muted); font-size: 12px; margin-top: 10px; }.education-meta { display: flex; align-items: center; gap: 18px; font: 10px/1.6 var(--font-mono); margin-block: 17px; color: var(--muted); }.education-meta strong { color: var(--green); font-weight: 500; background: #183629; padding: 5px 8px; border-radius: 4px; }.education-detail { max-width: 380px; line-height: 1.9; }.credentials-section .button-link { margin-top: 14px; font-size: 11px; }
.certification-row { display: flex; align-items: center; gap: 12px; margin-top: 19px; }.cert-icon { width: 32px; height: 32px; flex-shrink: 0; border-radius: 7px; background: #162a34; color: var(--accent); display: grid; place-items: center; font-weight: 700; font-size: 17px; }.certification-row h3 { font-size: 12px; font-weight: 600; }.certification-row p { font-size: 10px; color: var(--muted); margin-top: 3px; }.certification-row > svg { margin-left: auto; width: 18px; stroke: var(--green); stroke-width: 1.5; fill: none; }
.contact-band { display: flex; align-items: center; justify-content: space-between; gap: 25px; border: 1px solid #2d5944; border-radius: 10px; background: radial-gradient(ellipse at 90% 50%, #1a51313b, transparent), #101e22; padding: 32px 36px; margin-bottom: 60px; }.contact-band h2 { font-size: 32px; font-weight: 700; letter-spacing: -.8px; line-height: 1.2; }.contact-band h2 > span { color: var(--green); }.contact-band .eyebrow { margin-bottom: 10px; }.contact-band p:last-child { font-size: 12px; color: var(--muted); margin-top: 12px; }.contact-band-actions { display: flex; gap: 10px; flex-wrap: wrap; }
@media (max-width: 1100px) { .hero-layout { gap: 42px; grid-template-columns: 1.1fr .9fr; } h1 { font-size: 61px; }.hero-specialty { font-size: 10px; }.terminal-code-block { padding-inline: 18px; }.terminal-code-block dl > div { gap: 9px; }.quick-facts > * { padding-inline: 20px; }.quick-facts p { font-size: 9px; }.skill-cards { grid-template-columns: 1fr 1fr; }.contact-band { padding-inline: 28px; } }
@media (max-width: 800px) { .hero-layout { gap: 25px; padding-block: 45px; } h1 { font-size: 49px; }.hero-copy > h2 { font-size: 21px; }.hero-specialty { font-size: 9px; }.hero-description { font-size: 13px; }.current-role { font-size: 10px; }.hero-actions { gap: 8px; }.hero-actions .button { padding-inline: 15px; font-size: 12px; }.profile-terminal { transform: none; }.identity-orbit { width: 164px; height: 164px; }.identity-monogram { width: 108px; height: 108px; font-size: 39px; border-radius: 23px; }.terminal-code-block { font-size: 9px; padding-inline: 15px; }.terminal-code-block dt { width: 53px; }.terminal-bottom { font-size: 7px; padding-inline: 12px; }.terminal-bar { font-size: 9px; }.quick-facts { grid-template-columns: 1fr 1fr; }.quick-facts > :nth-child(3) { border-left: 0; }.quick-facts > :nth-child(n+3) { border-top: 1px solid var(--line); }.quick-facts p { font-size: 10px; }.quick-facts > * { padding: 19px 24px; }.experience-card { padding: 22px; }.company-row h3 { font-size: 14px; }.company-icon { width: 36px; height: 36px; }.current-badge { font-size: 8px; padding: 4px 6px; }.contact-band { align-items: flex-start; flex-direction: column; } }
@media (max-width: 650px) { .hero-layout { grid-template-columns: 1fr; gap: 35px; padding-block: 38px; }.hero-copy > h2 { font-size: 23px; }h1 { font-size: clamp(46px, 10.4vw, 67px); }.hero-specialty { font-size: 10px; }.hero-description { font-size: 14px; }.hero-copy { max-width: 520px; }.current-role { font-size: 10px; }.hero-actions .button { padding-inline: 21px; }.hero-socials { font-size: 12px; gap: 22px; }.profile-terminal { max-width: 440px; width: 100%; margin-inline: auto; }.profile-identity { padding-top: 16px; }.identity-orbit { width: 160px; height: 160px; }.terminal-code-block { font-size: 10px; padding: 5px 21px 20px; }.terminal-code-block dt { width: 64px; }.terminal-bottom { font-size: 8px; }.terminal-bar { font-size: 10px; }.quick-facts strong { font-size: 28px; }.quick-facts > * { padding: 18px; }.quick-facts p { font-size: 9px; line-height: 1.8; }.section-jumps { gap: 18px; justify-content: space-between; font-size: 10px; padding-block: 18px; }.section-jumps > span { display: none; }.home-section { padding-block: 43px; }.section-top { align-items: flex-start; gap: 15px; }.section-top > .button { font-size: 11px; gap: 7px; white-space: nowrap; padding-top: 25px; }.section-description { font-size: 12px; margin-top: 12px; }.featured-grid, .experience-grid, .credentials-section { grid-template-columns: 1fr; gap: 20px; }.experience-grid { margin-top: 24px; }.company-row h3 { font-size: 16px; }.company-icon { width: 42px; height: 42px; }.experience-card { padding: 25px; }.skill-cards { gap: 12px; margin-top: 24px; }.skill-cards article { padding: 19px 14px; }.skill-cards h3 { font-size: 12px; }.skill-cards .tag { font-size: 9px; padding-inline: 6px; }.credentials-section { padding-bottom: 43px; }.credentials-section > article { padding: 25px; }.contact-band { padding: 28px 25px; margin-bottom: 40px; }.contact-band-actions .button { font-size: 12px; padding-inline: 17px; } }
@media (max-width: 360px) { .hero-specialty { max-width: 270px; }.hero-actions .button { padding-inline: 16px; }.terminal-code-block { font-size: 9px; padding-inline: 17px; }.hero-socials { gap: 17px; font-size: 11px; }.section-top > .button { font-size: 10px; }.quick-facts > * { padding: 16px 12px; }.skill-cards { grid-template-columns: 1fr; } }
</style>
