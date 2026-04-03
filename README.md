# a.rehman — Digital Window to My Life

A minimalist, hand-crafted Jekyll-based portfolio and blog exploring technology, ethics, philosophy, and digital resilience.

🌐 **Live Site**: [arehman-dev.github.io](https://arehman-dev.github.io)

---

## ✨ Features

- **Minimalist Design**: Hand-crafted glassmorphic UI with smooth animations
- **Dark & Light Themes**: System-aware theme with persistent local storage
- **Multilingual**: English & Urdu content with proper typography
- **Responsive**: Optimized for all screen sizes and zoom levels
- **Performance-First**: No build tools, pure HTML/CSS/JavaScript
- **Privacy-Conscious**: No tracking, analytics, or third-party scripts (except Google Fonts & Lucide Icons)

### New Features (v2.0)
- 🔗 **Breadcrumb Navigation** — Easy navigation hierarchy
- 📋 **Copy Link & Print Buttons** — Quick sharing and saving
- 💬 **Giscus Comments** — GitHub Discussions-powered comments
- 📧 **Newsletter Signup** — Simple email form for subscribers
- 📚 **Archive by Date** — Browse posts chronologically with tags
- ⏭️ **Post Navigation** — Previous/Next post links
- 🔍 **RSS Feed** — Subscribe to updates
- ⌨️ **Keyboard Navigation** — `h` (home), `p` (perspective), `a` (about)
- 📱 **Social Share** — Copy link button + print/PDF
- ✨ **Stagger Animations** — Smooth card grid reveal
- 🤖 **SEO Optimized** — Meta tags, Open Graph, structured data

---

## 📁 Project Structure

```
arehman-dev.github.io/
├── _layouts/
│   └── default.html              # Main layout (breadcrumb, comments, newsletter, etc.)
├── _includes/
│   └── navigation.html           # Navigation component
├── _posts/                       # Blog posts
├── assets/
│   └── css/
│       └── style.css             # Main stylesheet + new components
├── perspective/
│   ├── index.md                  # Perspective collection
│   ├── post-1.md                 # Sample essay
│   └── post-2.md                 # Urdu content
├── poetry/
│   ├── index.md                  # Poetry collection
│   └── iqbal-01.md               # Classical Urdu poetry
├── collections/
│   ├── index.md                  # Collections index
│   └── linux-tools.md            # FOSS tools collection
├── about.md                      # About page
├── archive.md                    # Archive by date with tags
├── 404.md                        # Custom 404 page
├── contact.md                    # Contact page
├── portfolio/
│   └── index.md                  # Portfolio page
├── index.md                      # Homepage
├── feed.xml                      # RSS feed
├── robots.txt                    # SEO robots file
├── favicon.svg                   # Favicon (serif "a.")
├── _config.yml                   # Jekyll configuration
├── Gemfile                       # Ruby dependencies
└── README.md                     # This file
```

---

## 🛠️ Technology Stack

- **Static Site Generator**: Jekyll 4.4
- **Hosting**: GitHub Pages
- **CSS**: Custom, no frameworks
- **Fonts**: 
  - **Inter** (sans-serif) - UI, tags, metadata
  - **Playfair Display** (serif) - Headings
  - **Lora** (serif) - Body, prose
  - **Noto Nastaliq Urdu** (serif) - Urdu content
- **Icons**: Lucide Icons (unpkg CDN)
- **Comments**: Giscus (GitHub Discussions)
- **Theme**: CSS custom properties with system color-scheme detection

---

## 🎨 Design Philosophy

### Color Palette

**Light Theme:**
- Background: `#f8fbff` → `#f4fbf7` (gradient)
- Text: `#071e61` (dark blue)
- Accent: `#01ac6a` (green)
- Muted: `#397bc9` (medium blue)

**Dark Theme:**
- Background: `#030b1c` → `#05140d` (gradient)
- Text: `#f0f9f4` (light green)
- Accent: `#00ff9d` (bright green)
- Muted: `#8ed5ab` (light green)

### Key Components

- **Sidebar**: Fixed left navigation with glassmorphic icons
- **Top Bar**: Sticky navigation with brand logo and links
- **Breadcrumb**: Subtle navigation hierarchy
- **Card Grid**: Flexible content cards with stagger animations
- **Post Navigation**: Previous/Next buttons for easy browsing
- **Newsletter**: End-of-post subscription form
- **Comments**: GitHub Discussions integration
- **Share Buttons**: Copy link + Print/PDF
- **Archive**: Timeline view of all posts with tags
- **Photo Grid**: Responsive image gallery (Tasweer-kahani)

---

## 🚀 Setup & Development

### Prerequisites
- Ruby 3.2+
- Bundler

### Local Development

```bash
# Install dependencies
bundle install

# Serve locally at http://localhost:4000
bundle exec jekyll serve

# Build static site (generates _site/)
bundle exec jekyll build
```

### Configuration

Edit `_config.yml` to customize:
- Site title, description, URL
- Author name and email
- Social media handles
- RSS feed settings
- Collection paths

---

## 📝 Content Structure

### Adding a New Section

1. Create folder: `mkdir section_name`
2. Add `index.md` with front matter
3. Add posts as `post-name.md`
4. Update navigation in default.html

### Creating Blog Posts

Create file in `perspective/`, `poetry/`, or `collections/`:

```markdown
---
layout: default
title: Post Title
category: perspective
tags: [tag1, tag2, tag3]
lang: en
dir: ltr
---

Content here...
```

### Adding Urdu Content

Use inline styles for Urdu fonts:
```html
<div style="font-family: 'Noto Nastaliq Urdu', serif;">
  اردو ٹیکسٹ یہاں
</div>
```

---

## 📚 New Features Documentation

### Breadcrumb Navigation
Automatically generated based on page hierarchy. Shows path from home to current page.

### Keyboard Shortcuts
- `h` — Go to Home
- `p` — Go to Perspective
- `a` — Go to About

### Copy Link Button
Copies current page URL to clipboard with visual feedback.

### Print/PDF Button
Opens browser print dialog to save as PDF.

### Newsletter Form
Simple email form. Backend integration required (e.g., Mailchimp, ConvertKit).

### Comments (Giscus)
- Requires GitHub repository
- Uses GitHub Discussions
- Supports reactions and threading
- Auto-switches light/dark theme

### RSS Feed
Located at `/feed.xml` — Subscribe for updates with RSS reader.

### Archive Page
Browse all posts:
- Organized by year and date
- Tags shown inline
- Sortable by category

### SEO Meta Tags
- Open Graph (social media preview)
- Twitter Card
- Meta descriptions
- Structured data ready

---

## 🎯 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --text-main: #071e61;
    --accent: #01ac6a;
    /* ... */
}
```

### Typography
Modify font families and sizes:
- Body: `font-family: 'Inter', sans-serif;`
- Headings: `font-family: 'Playfair Display', serif;`
- Breadcrumb: `font-family: 'Inter', sans-serif;`

### Newsletter Service
Currently shows placeholder. Integrate:
- Mailchimp (forms API)
- Substack
- ConvertKit
- Or custom email backend

### Giscus Setup
Already configured but needs repo ID. To customize:
1. Visit [giscus.app](https://giscus.app)
2. Configure your GitHub repo
3. Update `data-repo-id` and `data-category-id` in layout

---

## 📊 Performance Notes

- **CSS**: Embedded in HTML (no separate requests)
- **Fonts**: Google Fonts (preconnect + preload)
- **Icons**: Lucide via CDN (SVG rendering)
- **Images**: Lazy loading on photo cards
- **JS**: Minimal (theme toggle, copy button, animations)
- **Build**: Static site generated at deploy time

---

## 🌍 Deployment

Deployed to GitHub Pages with Jekyll 4.4:

1. **Repository**: arehman-dev/arehman-dev.github.io
2. **Branch**: `main` (automatic deployment)
3. **Theme**: Disabled (custom only)

### Deploy Changes

```bash
git add .
git commit -m "description"
git push origin main
```

GitHub Pages rebuilds automatically (~1-2 minutes).

---

## 🐛 Known Issues & Roadmap

### Current
- [x] Dark/Light theme
- [x] Breadcrumb navigation
- [x] Comments system
- [x] Newsletter form
- [x] Post navigation
- [x] RSS feed
- [x] Archive page
- [x] Keyboard navigation
- [x] Stagger animations

### TODO
- [ ] Search functionality (Lunr.js)
- [ ] Social analytics (Plausible)
- [ ] PWA support
- [ ] Reading time estimate
- [ ] More sample posts
- [ ] Image optimization
- [ ] Accessibility audit (WCAG 2.1)

---

## 📜 License

This site and its content are personal. Code structure available for reference/inspiration.

---

## 👤 About

**Name**: A. Rehman  
**Role**: I.T. Professional & Digital Craftsman  
**Philosophy**: Conscious servitude, intellectual honesty, pursuit of *al-ʿIlm*

**Inspired by**: [Paul Stamatiou](https://paulstamatiou.com), [Dario Amodei](https://darioamodei.com)

**Connect**:
- Email: arehman.dev@protonmail.com
- GitHub: [@arehman-dev](https://github.com/arehman-dev)
- Mastodon: [@arehman@fosstodon.org](https://fosstodon.org/@arehman)

---

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://pages.github.com/)
- [Lucide Icons](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/)
- [Giscus Docs](https://giscus.app/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

*Handcrafted with perfectionism. Built for resilience. Inspired by the pursuit of excellence.*
