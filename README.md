# Raditya Pratama — Portfolio

A Nuxt 3 personal portfolio for digital transformation, enterprise applications, AI-enabled interfaces, and hardware integration. The content is based on the supplied CV. The raditya-dev3 design restores the original dark background, green accents, and terminal-inspired identity, with a recruiter-focused overview of projects, experience, skills, and education.

## Run locally

Use Node.js 24 (verified with 24.21.0) and npm.

```sh
npm ci
npm run dev
```

The development site is served at http://localhost:3000. If NVM reports no active Node version, select an installed version first, for example `nvm use 24.21.0`.

## Build

```sh
npm run generate
```

The static site is written to `.output/public`. It includes the homepage, About, Contact, eight CV project case studies, legacy project summaries, and the downloadable PDF. `npm run build` creates a server build when needed.

For deployment under a repository subpath, set `NUXT_APP_BASE_URL` (for example, `/Portfolio/`) before generating. Navigation, favicon, and CV download URLs respect this base path.

## Content and structure

- `data/portfolio.ts` — profile, projects, experience, education, certifications, skills, languages, community activities, and awards.
- `pages/index.vue` — personal introduction, CV download, four featured projects, experience, skills, and credentials.
- `pages/projects/index.vue` — filterable project collection.
- `pages/projects/project_details/[id].vue` — shared case study template.
- `pages/about.vue` — full professional background.
- `pages/contact.vue` — email, copy-email interaction, GitHub, and CV.
- `components/ProjectVisual.vue` — original conceptual workflow illustrations.
- `assets/css/main.css` — shared design tokens, typography, controls, and motion preferences.
- `public/files/Raditya-Pratama-CV.pdf` — downloadable CV generated from the supplied material.

Edit the central data file to update portfolio content. Replace the PDF separately when the CV changes. Set `profile.linkedin` only when a verified profile URL is available. The email address and GitHub URL come from the existing portfolio.

Project visuals are conceptual illustrations, not internal application screenshots. Corporate projects do not link to invented public repositories or live demos. Earlier personal-project URLs remain available as concise archived summaries.

## Deployment

Vercel project `portfolio-website` deploys the `main` branch of `SplatTacticTechnicSquid/PortfolioWebsite` to the existing production domain. Push or merge into that repository's `main` branch to trigger a production deployment. Other connected branches can create preview deployments.

Use the Nuxt framework preset, Node.js 24, and the repository root. Leave build and output overrides disabled so Vercel uses `npm run build` and Nitro's Vercel output. Leave `NUXT_APP_BASE_URL` unset or set to `/` for the root domain. The GitHub Pages workflow has been removed.

The redesign's individual commits and the original repository history are preserved. Existing event pages, learning articles, and their image assets remain available alongside the new portfolio and community gallery.

There is no backend service, database, contact submission endpoint, tracking script, or external font dependency. Email links open the visitor’s email application.

## Validation

Production static generation verifies every page can render. The redesign was also checked for internal link targets, downloadable PDF integrity, and HTTP error handling. Runtime and browser checks should be repeated when changing routes or interactions.
