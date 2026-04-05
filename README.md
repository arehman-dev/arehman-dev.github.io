# a.rehman — Digital Window to My Life

A minimalist, hand-crafted Jekyll-based portfolio exploring technology, ethics, philosophy, and digital resilience with glass morphism UI.

🌐 **Live:** [arehman-dev.github.io](https://arehman-dev.github.io)

---

## ✨ Key Features

- **Glass Morphism Design** — Smooth blur effects, dark/light theme
- **No Build Tools** — Pure HTML, CSS, JavaScript + Jekyll
- **Privacy-First** — No tracking, only Google Fonts & Lucide Icons
- **Keyboard Shortcuts** — `h` (home), `p` (perspective), `a` (about)
- **SEO Optimized** — Meta tags, OG, RSS feed, XML sitemap
- **Responsive** — Mobile-friendly grid layouts
- **Stagger Animations** — Cards cascade on scroll
- **Copy & Print** — One-click link sharing + PDF export

---

## � Quick Start

### Prerequisites
```bash
Ruby 3.2+, Bundler
```

### Local Development
```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

### Deploy
```bash
git push origin main
# GitHub Pages auto-deploys in 30-60 seconds
```

---

## 📁 Structure

```
_layouts/default.html       # Master template
_posts/                     # Blog posts (auto-collected)
perspective/                # Essays collection
poetry/                     # Poetry collection
tasweer-kahani/             # Photo gallery
assets/css/style.css        # All styling
_config.yml                 # Jekyll config
```

---

## 📝 Adding Content

### New Blog Post
Create `_posts/YYYY-MM-DD-title.md`:
```markdown
---
layout: default
title: "Title"
category: perspective
tags: [tag1, tag2]
---
Content...
```

### New Collection Item
Create `perspective/title.md` or `poetry/title.md`:
```markdown
---
layout: default
title: "Title"
---
Content...
```

### Add Images
Upload to `tasweer-kahani/` (images auto-appear on page via `_data/gallery.yml`)

To add a new image:
1. Upload file to `tasweer-kahani/[theme-folder]/image.jpeg`
2. Add entry to `_data/gallery.yml`:
   ```yaml
   galleries:
     [theme-name]:
       images:
         - path: "/tasweer-kahani/[theme-folder]/image.jpeg"
           alt: "Image description"
   ```
3. Rebuild site

**See [DEVELOPMENT.md](DEVELOPMENT.md) for:**
- Complete code logic & workflows
- Theme system details
- Image gallery system (lightbox + metadata)
- Advanced customization

---

## 🎨 Design

**Colors:**
- Light: `#f8fbff` bg, `#071e61` text, `#01ac6a` accent
- Dark: `#030b1c` bg, `#f0f9f4` text, `#00ff9d` accent

**Fonts:**
- Headings: Playfair Display (serif)
- Body: Lora (serif)
- UI: Inter (sans)
- Urdu: Noto Nastaliq

**Components:** Glass morphism cards, sticky nav, sidebar, photo grid

---

## 🛠️ Tech Stack

- **Generator:** Jekyll 4.4
- **Hosting:** GitHub Pages
- **CSS:** Custom, no frameworks
- **JS:** Vanilla (Intersection Observer, localStorage, modals)
- **CDN:** Google Fonts, Lucide Icons

---

## 📚 Documentation

- **DEVELOPMENT.md** — Full guide (code logic, workflows, gallery proposal)
- **_config.yml** — Customize site settings
- **Assets/css/style.css** — Theming & components

---

## 🔧 For Developers

### Theme System
Uses CSS variables for instant light/dark switching:
```css
:root { --text-main: #071e61; /* Light */ }
.dark { --text-main: #f0f9f4; /* Dark */ }
```

### Glass Components
```css
background: var(--glass-bg);
backdrop-filter: blur(16px);
border-radius: 20px;
```

Applies to: Top bar, dropdown, cards, buttons

---

## 🖼️ Image Gallery System

### Live on Tasweer Kahani Page ✅

The photo gallery now features an interactive modal-based viewing system with keyboard navigation and full-size image display.

### How It Works

**Data Centralization (YAML):**
All gallery images stored in `_data/gallery.yml`:
```yaml
galleries:
  blues-and-purple:
    title: "Blues & Purple"
    description: "Urban geometry & architecture"
    images:
      - path: "/tasweer-kahani/theme-blues-and-purple/img-01.jpeg"
        alt: "Image description"
```

**Dynamic Rendering:**
Template loops generate interactive grid from YAML data — click any image to open modal.

**Features:**
✅ Interactive lightbox gallery  
✅ Keyboard navigation (← → arrows, ESC to close)  
✅ Previous/next buttons  
✅ Centered full-size image display  
✅ Scales to unlimited images  
✅ Centralized image management  

**Adding Images:**
1. Upload to `tasweer-kahani/[theme-folder]/`
2. Add entry to `_data/gallery.yml`
3. Rebuild site

**See [DEVELOPMENT.md](DEVELOPMENT.md#-image-gallery-system) for complete implementation details**

---

---

## 📚 Additional Resources

- **DEVELOPMENT.md** — Complete code documentation
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Last Updated:** April 5, 2026  
**Version:** 2.0+
