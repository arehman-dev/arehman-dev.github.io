# Abdul Rehman — Unified Engineering Portfolio & Personal Space (`v3.0`)

A unified, high-performance static web architecture built with **Astro (v6)** combining the **Technical Engineering Portfolio (`/`)** and the **Personal Editorial Space (`/me/`)** under a single cohesive design system (**Pitch Black OLED + Frosted Acrylic Glass + Dual Blue-Green Editorial Accents**).

- 🌐 **Live Site**: [https://arehman-dev.github.io/](https://arehman-dev.github.io/) & [https://arehman-dev.github.io/me/](https://arehman-dev.github.io/me/)
- 📖 **Full Architecture & Working Guide**: See **[`DOCUMENTATION.md`](file:///home/arehman/00-code/portfolio/DOCUMENTATION.md)** and **[`COLOR_PALETTE.md`](file:///home/arehman/00-code/portfolio/COLOR_PALETTE.md)**.

---

## 🏛️ Version History & Zero-Bloat Repository Archive

Previous major versions (`v1` and `v2`) are permanently preserved in Git history using **annotated Git tags** and **lightweight archive branches**—keeping the working tree clean with **zero extra repository bloat**:

| Version | Milestone Description | Git Tag | Archive Branch | How to Inspect / Restore |
| :--- | :--- | :--- | :--- | :--- |
| **`v3.0`** *(Current)* | Unified Astro Architecture: Technical Portfolio (`/`) + Personal Space (`/me/`), Pitch Black OLED theme, Reader Comfort modes, Urdu Nastaliq engine, & expanded Toolbelt | `v3.0` *(HEAD)* | `main` | `git checkout main` |
| **`v2.0`** | Multi-Page Astro E-Portfolio (8 technical routes, Neofetch terminal, dynamic slugs) | `v2.0` | `archive/v2` | `git checkout v2.0` or `git checkout archive/v2` |
| **`v1.1` / `v1.0`** | Original Single-Page Vanilla HTML/CSS/JS Portfolio with swipeable carousels | `v1.1` / `v1.0` | `archive/v1` | `git checkout v1.1` or `git checkout archive/v1` |

---

## 🌟 Key Highlights of `v3.0`

- **Dual-Domain Unified Architecture (`49` Static Pages)**:
  - **Technical Portfolio (`/`)**: Interactive Neofetch terminal hero, Developer Architecture Project Cards (`/projects/`), categorized Toolbelt with **Python, Bash, C++, Systemd & CLI, and Local Llama/AI Evaluation** (`/skills-experience/`), self-hosted technical articles (`/articles/`), credentials (`/certificates/`), and resume (`/hire-me/`).
  - **Personal Digital Window (`/me/`)**: Expandable bio drawer, Featured Writings, 3-card Recent Writings carousel, 12-photo lens grid, *Perspective* essays (`/me/perspective/`), *Ashaar* Urdu/English poetry (`/me/poetry/`), *Tasweer-Kahani* filterable Bento/Journal gallery (`/me/tasweer-kahani/`), merged Collections & Chronological Archive (`/me/archive/`), and an open-canvas About page (`/me/about/`).
- **Open-Canvas Bilingual Reader & Eye-Comfort Engine**:
  - Dario Amodei-inspired card-free reading layout with a sticky **Left-Most (English LTR)** / **Right-Most (Urdu RTL)** Table of Contents rail, 4 persistent reading comfort themes (*Default*, *Sepia*, *Sepia Dark*, *Soft Contrast*), and classical Diwan centered couplets for Urdu poetry in `Noto Nastaliq Urdu`.
- **Ultra-Fast Static Performance**:
  - `0 KB` client-side JS framework overhead, `~18 KB` CSS on `/`, `~43 KB` CSS on `/me/`, and 65 Lanczos-optimized progressive JPEGs (`245 MB` → `15.17 MB`, **93.8% reduction**).

---

## 📁 Directory Structure

```
portfolio/
├── dist/                     # Compiled production static bundle (49 pages)
├── public/                   # Static assets, optimized tasweer-kahani/ photos & .nojekyll
├── src/
│   ├── components/           # Reusable Astro components (Navbar, ProjectCard, ArticleCard, SocialDock)
│   ├── data/                 # Typed content engines (projects.ts, skills.ts, articles.ts, certificates.ts, personal.ts)
│   ├── layouts/              # BaseLayout.astro (/) and PersonalLayout.astro (/me/)
│   ├── pages/                # File-based routes for / and /me/ + dynamic [slug].astro routes
│   └── styles/               # global.css (/) and personal.css (/me/)
├── DOCUMENTATION.md          # Comprehensive technical & editorial architecture reference
├── COLOR_PALETTE.md          # Unified color tokens, glass surfaces & reader theme specs
├── DEVELOPMENT.md            # Contributor & content update guide
└── astro.config.mjs          # Astro root-domain configuration (https://arehman-dev.github.io)
```

---

## 🚀 Setup & Local Development

```bash
npm install        # Install dependencies
npm run dev        # Start local dev server at http://localhost:4321/ and http://localhost:4321/me/
npm run build      # Compile static production bundle into dist/
npm run preview    # Preview production bundle locally
```
