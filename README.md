# Abdul Rehman — Portfolio Website (Astro Evolved E-Portfolio)

A high-performance, responsive, multi-page professional developer e-portfolio built with the Astro framework, custom CSS, and vanilla ES modules. Tailored specifically to highlight specializations in **Python, C++, Linux System Administration, Software Testing, and workflow automation**.

⚡ **Built with Astro (Static Site Generation)**: Super-fast load speeds, optimized SEO, and structured components.

---

## 🌟 Key Features & Layouts

- **Multi-page Structure**: 8 distinct page routes for detailed showcase:
  - **Home**: Featuring an interactive Neofetch terminal mockup, personal core values, and current specialization tracks.
  - **About**: Professional narrative detailing development philosophies, technical principles, and core focus areas.
  - **Projects**: Project grid with dynamic sub-pages for in-depth analysis (problem, solution, features, links, and codebase info).
  - **Certifications**: Directory of certificates with dynamic pages mapping details of credentials and acquired skills.
  - **Skills & Experience**: Visual proficiency dashboards (Programming, Systems/Testing, and Learning tracks) coupled with timeline roles at **InfraLayers**.
  - **Articles**: Self-hosted knowledge base feed page featuring recent write-ups.
  - **Articles Archive**: Chronological listing of all published entries.
  - **Hire Me**: Integrated digital resume panel, availability statuses, response times, and quick-contact interfaces.
- **Top Glassmorphic Navigation**: A sticky top navigation bar with blur backdrops, glowing active page states, and a clean mobile hamburger dropdown.
- **Bottom-Left Collapsible Social Dock**: Floating quick-link dock that anchors on the screen's bottom-left. It collapses into a compact layout and features color-coded hover effects for X (Twitter), GitHub, LinkedIn, and Email.
- **Creative Refreshed Aesthetics**: Inter & JetBrains Mono typography, vibrant text gradients, translucent card layers, glowing borders, and subtle neon status indicators.
- **Double Theme Toggling**: Native storage-bound theme switcher supporting custom Light and OLED-optimized Dark Mode (featuring a subtle noise overlay, linear grid lines, and top-center green radial glows).
- **Anti-FOUC Initialization**: A inline head script that locks theme preferences before page render to avoid sudden screen flashes.

---

## 🛠️ Dynamic & Data-Driven Architecture

All content is managed through clean, typed models located under `src/data/` to keep page markup separate from text data. Modifying these configurations automatically generates corresponding pages and dynamic routes:

- **Projects Data** ([src/data/projects.ts](file:///home/arehman/00-code/portfolio/src/data/projects.ts)): Holds projects info. Title, tags, description, features, and dynamic routing paths.
- **Certificates Data** ([src/data/certificates.ts](file:///home/arehman/00-code/portfolio/src/data/certificates.ts)): Manages completed and in-progress credentials (e.g., LPIC-1, Google IT Automation with Python, and Scientific Computing with Python).
- **Technical Skills** ([src/data/skills.ts](file:///home/arehman/00-code/portfolio/src/data/skills.ts)): Defines the technical skill grids (Programming & Automation, Systems & Testing, and Active Specializations).
- **Articles Data** ([src/data/articles.ts](file:///home/arehman/00-code/portfolio/src/data/articles.ts)): Houses self-hosted Markdown/HTML articles, auto-generating dynamic detail pages at `/articles/[slug]`.

---

## 📋 Finalized Development Highlights

The following parameters have been fully integrated into the production version of the portfolio:
* **Primary Contacts**: All email interactions and links point exclusively to the verified address: `arehman.dev@proton.me`.
* **Technical Shift**: Moved away from RHEL/RHCSA configurations to emphasize general Linux systems management (focusing on **Debian & Ubuntu**), **C++**, **Python**, **software testing**, and **automation**.
* **Active Tracks**: Structured both *Google IT Automation with Python* and *Scientific Computing with Python* as actively ongoing professional certificates (targeted for completion in 2026).
* **Creative Footer**: Embedded a custom developer loop: `while(alive) { write_code(); automate_systems(); test_everything(); }` in the layout, representing core skills in development, systems administration, and quality assurance.
* **Hosting Compatibility**: Configured the site with `base: '/portfolio'` and normalized all internal page links to end with trailing slashes (`/`), ensuring seamless static routing on GitHub Pages.

---

## 📁 Directory Structure

```
portfolio/
├── dist/                     # Compiled production build outputs (ready for hosting)
├── public/                   # Static public assets (icons, resume documents)
│   └── assets/
├── src/
│   ├── components/           # Reusable Astro components (Navbar, Cards, SocialDock)
│   ├── data/                 # TypeScript models and configurations arrays
│   ├── layouts/              # Global page template with footer and SEO meta
│   │   └── BaseLayout.astro
│   ├── pages/                # File-based routes & dynamic templates (e.g., [slug].astro)
│   └── styles/               # Main design systems stylesheet
│       └── global.css
├── astro.config.mjs          # Astro settings and routing configs
├── tsconfig.json             # TypeScript configuration
├── package.json              # NPM dependencies & task script configurations
└── DEVELOPMENT.md            # Detailed contributor development instructions
```

---

## 🚀 Setup & Local Development

1. **Install packages**
   ```bash
   npm install
   ```

2. **Run dev server (auto-reloading)**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321/](http://localhost:4321/) in your browser.

3. **Compile static bundle**
   ```bash
   npm run build
   ```
   This generates ready-to-host static HTML/CSS assets in the `dist/` directory.
