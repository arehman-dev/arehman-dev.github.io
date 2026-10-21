# Comprehensive Technical & Editorial Architecture Documentation (`v3.0`)

Welcome to the master technical reference for **Abdul Rehman's Unified Web Architecture (`v3.0`)**. This document provides an end-to-end breakdown of how the entire site works—covering the dual-domain routing topology, layouts, TypeScript data engines, CSS design systems, bilingual (English LTR + Urdu Nastaliq RTL) typography pipeline, reading comfort engine, interactive keyboard/search systems, asset optimization, version archiving (`v1`, `v2`, `v3`), and deployment to `arehman-dev.github.io`.

---

## 1. High-Level System Architecture

Prior to `v3.0`, the **Technical Portfolio** (`arehman-dev/portfolio`) and the **Personal Space** (`arehman-dev.github.io`, built on Jekyll) operated as two separate codebases with separate theme engines and build pipelines.

In **`v3.0`**, both experiences are unified into a single **Astro v6 Static Site Generation (`output: "static"`)** architecture with **zero client-side JS framework overhead** (no React/Vue hydration bundles):

```
arehman-dev.github.io/
├── /                         → Technical Engineering Portfolio (BaseLayout.astro + global.css)
│   ├── /about/               → Engineering philosophy & background
│   ├── /projects/            → Developer Architecture Cards & dynamic [slug] case studies
│   ├── /certificates/        → Credential index & dynamic [slug] verification pages
│   ├── /skills-experience/   → Core toolbelt, Systems/Testing matrix & InfraLayers timeline
│   ├── /articles/            → Technical systems & programming articles + /articles/archive/
│   └── /hire-me/             → Digital resume, availability & direct contact channels
│
└── /me/                      → Personal Editorial & Contemplative Space (PersonalLayout.astro + personal.css)
    ├── /me/                  → Expandable bio drawer, Featured Writings, 3-Card Carousel, & 12-Photo Lens Grid
    ├── /me/perspective/      → Essays on philosophy, ethics, Iḥsān & systems thinking + dynamic [slug]
    ├── /me/poetry/           → Classical & contemporary Urdu/English poetry (Ashaar) + dynamic [slug]
    ├── /me/tasweer-kahani/   → Filterable Bento & Journal visual storytelling gallery + lightbox modal
    ├── /me/archive/          → Merged Curated Collections + interactive filterable chronological index
    └── /me/about/            → Split Portrait Header + Open-Canvas Architectural Ledger, Pillars & Epigraph
```

### Shared Global State (`localStorage`)
Both `/` and `/me/` share two synchronized client-side persistence keys so switching between the two worlds feels seamless:
1. **`localStorage.getItem('theme')`** (`'dark'` | `'light'`):
   - Synchronizes `document.documentElement.classList.toggle('dark')` and `data-theme="dark" | "light"` across every route in `/` and `/me/`.
   - Locked before first paint via an inline `<head>` anti-FOUC script in both [`BaseLayout.astro`](file:///home/arehman/00-code/portfolio/src/layouts/BaseLayout.astro) and [`PersonalLayout.astro`](file:///home/arehman/00-code/portfolio/src/layouts/PersonalLayout.astro).
2. **`localStorage.getItem('reader-theme')`** (`'default'` | `'sepia'` | `'sepia-contrast'` | `'soft-contrast'`):
   - Persists the user's preferred eye-comfort reading mode across technical articles (`/articles/[slug]/`) and personal essays/poetry (`/me/[category]/[slug]/`).

---

## 2. Layout & Component Architecture

### 2.1 Technical Portfolio Layout (`src/layouts/BaseLayout.astro`)
Used by all routes under `/`.
- **Anti-FOUC Theme Script**: Reads `localStorage.getItem('theme')` (or `prefers-color-scheme`) in `<head>` before body render.
- **Linux Waybar Global HUD ([`src/components/WaybarHud.astro`](file:///home/arehman/00-code/arehman-dev.github.io/src/components/WaybarHud.astro))**:
  - Persistent, tiling-window-manager-inspired telemetry bar fixed below the navbar displaying active shell path (`arehman@dev:~/home`), Git status (`v4.0-main ●`), kernel/runtime indicators (`Linux 6.6 · C++20 · Python 3.12 · POSIX`), dynamic Islamabad timezone clock (`PKT`), and instant jump pill to `/me/`.
- **Interactive Telemetry Console ([`src/components/TelemetryConsole.astro`](file:///home/arehman/00-code/arehman-dev.github.io/src/components/TelemetryConsole.astro))**:
  - Tabbed terminal console on the homepage featuring `neofetch`, live multi-threaded `benchmarks` matrix, and `test-run` execution simulator with one-click CLI command copying.
- **Live Process Tree Monitor ([`src/components/ProcessTree.astro`](file:///home/arehman/00-code/arehman-dev.github.io/src/components/ProcessTree.astro))**:
  - `btop`/`htop`-style Linux process table mapping core engineering competencies as active system daemons (Python Automation PID 101, C++ Systems Core PID 102, Linux SysAdmin PID 103, QA Verification PID 104) with visual utilization bars and runtime capabilities.
- **Blueprint Schematics Card ([`src/components/SchematicCard.astro`](file:///home/arehman/00-code/arehman-dev.github.io/src/components/SchematicCard.astro))**:
  - Hardware/systems blueprint card featuring caliper IDs (`[AR-SCHEM-01]`), Git branch status, and interactive 3-way in-card tabs (`Architecture`, `Engineering Solution`, `Key Capabilities`).
- **Navigation ([`src/components/Navbar.astro`](file:///home/arehman/00-code/arehman-dev.github.io/src/components/Navbar.astro))**:
  - Sticky frosted-glass top navigation bar with active link highlighting and mobile hamburger drawer.
  - Includes the **Site Switcher Button (`personal`)** featuring a rounded-corner rectangle (`border-radius: 8px`) and pen icon (`fa-pen-nib`) that bridges directly to `/me/`.

### 2.2 Personal Space Layout (`src/layouts/PersonalLayout.astro`)
Used by all routes under `/me/`, serving both **index/page views** (via `<slot />`) and **opened article/poetry views** (when the `post` prop is passed).
- **Fixed Non-Repeating Horizon Skylight + Architectural Grid Canvas**:
  - Rendered via `body.personal-space-body::before` (`position: fixed; inset: 0; pointer-events: none; z-index: 0;`) using top-down dual radial skylights (Ocean Blue `#397bc9` at 32% and Emerald `#01ac6a` at 68%) layered over a whisper-subtle `40px × 40px` (`38px × 38px` in dark mode) architectural grid. Because the canvas is `fixed` to the viewport, it never tiles or repeats vertically on long pages.
- **Left Floating Utility Sidebar (`.sidebar`)**:
  - Unified `border-radius: 16px` frosted glass dock on the left edge (collapses to a bottom-center floating bar on `<900px` screens).
  - Houses 5 quick utilities with slide-out frosted glass tooltips (`.sidebar-tooltip`) and keyboard shortcut badges:
    1. **Home (`h`)** — Navigates to `/me/`
    2. **Quick Search (`/` or `⌘K`)** — Opens the instant client-side Command Palette modal
    3. **Serendipity / Random Piece (`r`)** — Jumps to a random essay, poem, or collection
    4. **Scroll to Top (`↑`)** — Smooth-scrolls to top of page
    5. **Theme Toggle (`d`)** — Toggles Light / Pitch Black OLED Dark mode
- **Sticky Editorial Top Bar (`.glass-top-bar`)**:
  - Unified `border-radius: 16px` frosted glass header with brand signature (`Abdul Rehman.`), non-pill editorial navigation links (`perspective`, `poetry`, `tasweer kahani`, `archive`, `about`) featuring an animated bottom dual-accent gradient hairline (`::after`), and the **`>_ portfolio` bridge button** (`border-radius: 8px`).
  - Includes a live **Reading Progress Hairline (`#me-reading-progress`)** along the bottom border that tracks scroll percentage from `0%` to `100%`.

---

## 3. Data-Driven Content Models (`src/data/`)

All content across all 49 static pages is generated from 5 strongly-typed TypeScript modules in `src/data/`:

### 3.1 Technical Skills & Toolbelt ([`src/data/skills.ts`](file:///home/arehman/00-code/portfolio/src/data/skills.ts))
- **`skillCategories`**: Powers `/skills-experience/` across 3 categories (*Programming & Scripting*, *Systems, Networking & Testing*, and *Active Learning & Emerging Tech*).
- **`toolbeltCategories`**: Powers the categorized Toolbelt matrix on `/skills-experience/`:
  - **Core Languages & Linux CLI** (ordered: `Python`, `Bash / Shell`, `C++`, `Systemd & Linux CLI`, `Cron & Timers`, `Git`, `GCC / G++`, `Make & CMake`)
  - **AI, Local LLMs & Model Evaluation** (`Llama (Local Setup & Inference)`, `AI Model Testing & Benchmarking`, `Prompt & Context Engineering`, `Multimodal Vision-LLM Pipelines`, `AI-Assisted Automation Workflows`)
  - **Networking, Security & Diagnostics**
  - **Containers, Services & Web**
  - **Workstation & Workflow**
- **`experiences` & `education`**: Renders the professional timeline (**InfraLayers**, etc.) and academic background.

### 3.2 Technical Projects ([`src/data/projects.ts`](file:///home/arehman/00-code/portfolio/src/data/projects.ts))
- Defines all engineering projects, including the flagship **`portfolio-website`** entry (*"Unified Web Architecture — Engineering & Editorial Hub"*), generating both the `/projects/` grid and `/projects/[slug]/` detail routes.

### 3.3 Technical Articles ([`src/data/articles.ts`](file:///home/arehman/00-code/portfolio/src/data/articles.ts))
- Self-hosted long-form engineering write-ups with `title`, `slug`, `date`, `publishDate`, `readTime`, `category`, `excerpt`, and HTML `content`.
- Generates `/articles/`, `/articles/archive/`, and `/articles/[slug]/`.

### 3.4 Certifications ([`src/data/certificates.ts`](file:///home/arehman/00-code/portfolio/src/data/certificates.ts))
- Manages completed and ongoing certifications, generating `/certificates/` and `/certificates/[slug]/`.

### 3.5 Personal Writings & Photography ([`src/data/personal.ts`](file:///home/arehman/00-code/portfolio/src/data/personal.ts))
- **`personalPosts` (`PersonalPost[]`)**:
  - Unified array containing all entries across `'perspective'`, `'poetry'`, and `'collections'`.
  - Each entry specifies `lang: 'en' | 'ur'`, `dir: 'ltr' | 'rtl'`, `readTime`, `tags`, `featuredOnHome`, `featuredInCategory`, and full HTML `content`.
  - Dynamic route generators in `/me/perspective/[slug].astro`, `/me/poetry/[slug].astro`, and `/me/collections/[slug].astro` filter `personalPosts` by category and pass `post`, `prevPost`, and `nextPost` into `PersonalLayout.astro`.
- **`homeGridImages` (`GalleryImage[]`)**:
  - 12 curated photographs displayed in the 4×3 grid at the bottom of `/me/`.
- **`galleryThemes` (`GalleryTheme[]`)**:
  - 3 thematic photo collections (*Blues & Purple*, *Walk Into Nature*, and *Moments*) powering `/me/tasweer-kahani/`.

---

## 4. Open-Canvas Article Reader & Bilingual Typography Engine

### 4.1 Dario Amodei-Inspired Open Reading Canvas
In `/me/`, opened articles and poems ([`PersonalLayout.astro`](file:///home/arehman/00-code/portfolio/src/layouts/PersonalLayout.astro)) deliberately avoid heavy card containers around body text. Instead, prose sits directly on the ambient canvas inside `.article-editorial-layout`:
- **2-Column Editorial Grid**:
  - **English Articles (`ltr-layout`)**: Sticky **Table of Contents (TOC) Rail** sits on the **left-most column** (`240px`), and the article canvas (`max-width: 720px`) sits on the right.
  - **Urdu Articles (`rtl-layout`)**: `direction: rtl` automatically mirrors the grid so the sticky **TOC Rail (`فہرستِ مضمون`)** sits on the **right-most column**, and the Urdu article flows on the left.
- **Auto-Generated Scroll-Spy TOC**:
  - Client-side script scans `#me-post-content` for `h2` and `h3` headings, builds anchor links under the clickable article title link (`#post-top`), and uses an `IntersectionObserver` to highlight the active section while scrolling.
- **4 Eye-Comfort Reading Themes**:
  - Available in both `/` (`/articles/[slug]/`) and `/me/` (`/me/[category]/[slug]/`):
    1. **Default** — Calibrated off-white / soft-obsidian contrast (`--text-body-comfort`)
    2. **Sepia** — Warm paper background (`#f4ecd8`) with espresso ink (`#231915`)
    3. **Sepia Dark** — Deep warm umber (`#16120e`) with parchment text (`#f5ebe0`)
    4. **Soft Contrast** — Low-glare slate (`#181d23`) with muted cool-white text (`#e8eef4`)
- **Pill-Free Article Hashtags**:
  - Beneath the article date and reading time, `#tags` sit directly over the background with no pill box (`.post-hashtag`), linking to `/me/archive/?tag=<tag>` to filter the archive automatically.

### 4.2 Urdu Nastaliq (`Noto Nastaliq Urdu`) & Diwan Poetry Engine
- **Universal Font Enforcement**:
  - `Noto Nastaliq Urdu` (`wght@400;700`) is loaded in both `BaseLayout.astro` and `PersonalLayout.astro`.
  - `.urdu-text`, `.urdu-inline`, and `body.personal-space-body.rtl` enforce `font-family: 'Noto Nastaliq Urdu', serif !important;` and `font-style: normal !important;` across all child headings, paragraphs, links, blockquotes, TOC items, and cards so Nastaliq is never overridden by Latin serif rules or tilted by inherited `italic` styles.
- **Ascender & Baseline Compensation**:
  - Because Nastaliq tall ascenders (`ا`, `ک`, `ل`, `ط`) rise higher than Latin cap-heights, dedicated top-padding and line-height rules (`line-height: 2.15–2.38 !important`) are applied to Urdu headers, TOC rails, and card titles so Urdu text sits vertically balanced.
- **Classical Diwan / Mushaira Couplet Formatting**:
  - For posts in the `poetry` category (`.post-container.category-poetry`), `<blockquote>` elements are automatically styled as centered poetic couplets (`text-align: center`, dual-accent translucent tint, top/bottom hairline borders, and a `❖` floral ornament separator).

---

## 5. Interactive Subsystems in `/me/`

1. **Command Palette / Quick Search (`#me-search-modal`)**:
   - Triggered via the sidebar search icon or pressing `/`.
   - Searches across all `personalPosts` titles, categories, excerpts, and English/Urdu tags in real time with instant keyboard dismissal (`ESC`).
2. **Global Keyboard Shortcuts**:
   - `h` → Home (`/me/`)
   - `p` → Perspective (`/me/perspective/`)
   - `t` → Tasweer Kahani Photos (`/me/tasweer-kahani/`)
   - `a` → About (`/me/about/`)
   - `/` → Open Search Modal
   - `r` → Jump to Random Writing
   - `d` → Toggle Dark/Light Theme
3. **Tasweer-Kahani Dual-Mode Gallery & Lightbox Modal**:
   - Filterable by theme pill (*All Stories*, *Blues & Purple*, *Walk Into Nature*, *Moments*).
   - Switchable between **Bento Grid View** (featured 2-column spans + hover glass captions) and **Journal View** (single-column editorial feed with persistent story captions).
   - Clicking any photo opens `#photo-modal` with keyboard navigation (`←`, `→`, `Escape`) and image counter (`1 / N`).
4. **65-Photo Asset Optimization**:
   - All 65 camera photographs in `public/tasweer-kahani/` are optimized with Lanczos downsampling (`max 1600px`, EXIF orientation transposed, progressive JPEG at `82%` quality), reducing total image payload from `245.10 MB` to **`15.17 MB`** (**93.8% reduction**) paired with `loading="lazy" decoding="async"`.

---

## 6. Version History & Zero-Bloat Git Archive

All historical milestones of the repository are preserved in Git using annotated tags and archive branches without duplicating folders in the working tree:

| Version | Architecture | Git Tag | Branch |
| :--- | :--- | :--- | :--- |
| **`v3.0`** | Unified Astro v6 Architecture (`/` Technical + `/me/` Editorial Hub) | `v3.0` | `main` |
| **`v2.0`** | Multi-Page Astro Technical E-Portfolio | `v2.0` | `archive/v2` |
| **`v1.1` / `v1.0`** | Original Single-Page Vanilla HTML/CSS/JS Portfolio | `v1.1`, `v1.0` | `archive/v1` |

---

## 7. Build & Live Deployment Architecture (`arehman-dev.github.io`)

### Local Commands
```bash
npm install        # Install dependencies
npm run dev        # Start local dev server at http://localhost:4321/ and http://localhost:4321/me/
npm run build      # Compile static production output into ./dist/ (49 pages)
npm run preview    # Preview ./dist/ production build locally
```

### Live GitHub Pages Deployment Topology
- **Source Repository (`arehman-dev/portfolio`)**:
  - Houses the complete Astro v3 source code, `src/`, `public/`, documentation, and `.github/workflows/deploy.yml`.
- **Root Domain Repository (`arehman-dev/arehman-dev.github.io`)**:
  - Serves the root GitHub Pages domain **`https://arehman-dev.github.io/`** (and **`https://arehman-dev.github.io/me/`**).
  - Contains the compiled static output from `./dist/` along with `.nojekyll` (from `public/.nojekyll`) so GitHub Pages serves `_astro/*.css` bundles directly at the root domain without Jekyll underscore filtering.
  - Previous standalone Jekyll personal site (`v1.9`) is preserved under tag `v1.9-jekyll` and branch `archive/jekyll-v1.9` in `arehman-dev.github.io`.
