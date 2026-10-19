# Development Guide — Evolved Astro Portfolio

Welcome to the developers and content updates guide. This document details the routing configurations, data modeling, styling system, and deployment workflow for the portfolio website.

---

## 🛠️ Tech Stack & Configurations

- **Site Generator**: [Astro Framework (v6)](https://astro.build/)
- **Output Mode**: Static Site Generation (SSG)
- **CSS Engine**: Vanilla CSS variables, utility tokens, and Glassmorphic overlays (configured in `src/styles/global.css`)
- **Scripts**: Vanilla ES Modules (zero external client framework libraries like React or Vue)
- **Linting/Checking**: TypeScript Strict Mode

---

## 🗃️ Data Models & Content Updates

All content is loaded dynamically from typescript models in the `src/data/` directory. Updates to these files automatically compile into static site pages.

### 1. Projects Data Schema
- **File**: [src/data/projects.ts](file:///home/arehman/00-code/portfolio/src/data/projects.ts)
- **Routing**: Renders lists at `/projects/` and individual sub-detail pages at `/projects/[slug]/` via `src/pages/projects/[slug].astro`.
- **Model structure**:
  ```typescript
  export interface Project {
    title: string;
    description: string;
    slug: string;
    tags: string[];
    status: 'Completed' | 'In Progress' | 'Concept';
    link?: string;
    sourceLink?: string;
    longDescription?: string;
    problem?: string;
    solution?: string;
    features?: string[];
  }
  ```
- *Note*: Ensure that general Linux or Debian tags are added in projects instead of RHEL tags. The dynamic icon picker in `ProjectCard.astro` selects standard icons using tag filters (`Linux`, `Debian`, `Bash`, `Python`, etc.).

### 2. Certifications Data Schema
- **File**: [src/data/certificates.ts](file:///home/arehman/00-code/portfolio/src/data/certificates.ts)
- **Routing**: Renders grid components on `/certificates/` and dynamic details at `/certificates/[slug]/` via `src/pages/certificates/[slug].astro`.
- **Model structure**:
  ```typescript
  export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    slug: string;
    status: 'Active' | 'In Progress' | 'Completed' | 'Upcoming';
    link?: string;
    description: string;
    overview: string;
    skillsAcquired: string[];
    credentialId?: string;
  }
  ```
- *Important*: Ongoing courses (e.g. Google IT Automation with Python, Scientific Computing) are set to `status: "In Progress"` and do not define a `credentialId`.

### 3. Technical Skills Schema
- **File**: [src/data/skills.ts](file:///home/arehman/00-code/portfolio/src/data/skills.ts)
- **Rendering**: Directly maps onto `/skills-experience/` under structural grid divisions.
- **Model structure**:
  ```typescript
  export interface Skill {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Beginner' | 'Learning' | 'Exam Prep';
    icon?: string;
  }
  export interface SkillCategory {
    title: string;
    skills: Skill[];
  }
  ```

### 4. Technical Articles Schema
- **File**: [src/data/articles.ts](file:///home/arehman/00-code/portfolio/src/data/articles.ts)
- **Routing**: Populates the `/articles/` feed page and dynamic local routes at `/articles/[slug]/`. The archive page is served at `/articles/archive/` and sorts entries chronologically by their `publishDate` property.
- **Model structure**:
  ```typescript
  export interface Article {
    title: string;
    excerpt: string;
    date: string;
    publishDate: string; // Standard format for sorting: YYYY-MM-DD
    readTime: string;
    coverImage: string;
    category: string;
    link?: string; // Optional external link (e.g., dev.to)
    slug: string;
    content: string; // Full markdown/HTML content for local hosting
  }
  ```
- *Guideline*: Refrain from creating RHEL-exclusive tutorials. Frame systems articles around generic Linux configurations, Debian, Ubuntu, or coding concepts (Python/C++).

---

## 🎨 Global Styles & Layout Guidelines

- **Typography**: Uses `Outfit` as the base font (for headers and cards) and `JetBrains Mono` for code snippets, tags, the terminal, and key highlights.
- **Email Contact Integration**: Do not hardcode emails dynamically. All contact methods are consolidated around `arehman.dev@proton.me`.
- **Creative Footer**: The footer is declared inside `BaseLayout.astro`. If modified, maintain a creative, technical tagline layout.
- **Anti-FOUC Init**: To prevent the screen from flashing during light/dark transitions, a script is embedded directly in `<head>` inside `BaseLayout.astro`. Avoid modifying this unless optimizing theme load scripts.
- **Social Dock**: The floating dock inside `SocialDock.astro` reveals links on hover. If adding platforms, keep their respective brand colors inside `SocialDock.astro` `<style>` definitions.
- **Trailing Slash Enforce**: GitHub Pages static hosting under project subfolders does not reliably map extensionless directory endpoints. Always append trailing slashes `/` to internal link triggers (e.g. use `${base}about/` instead of `${base}about`). Use the normalized `base` helper initialized in templates to guarantee paths work locally and on GitHub Pages:
  ```typescript
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  ```

---

## ⚡ Deployment & Building

Astro builds complete static pages that can be hosted on GitHub Pages, Netlify, Vercel, or custom server distributions.

### 1. Compile static bundle
```bash
npm run build
```
This command compiles the site and output files directly to the `dist/` directory.

### 2. Preview production bundle locally
```bash
npm run preview
```
Runs a local web server targeting the compiled files in the `dist/` directory to validate routing, redirects, and CSS behaviors before pushing to git.
