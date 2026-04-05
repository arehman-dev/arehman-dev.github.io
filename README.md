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
1. Upload to `tasweer-kahani/theme-folder/`
2. Link in markdown: `<img src="/tasweer-kahani/.../image.jpeg" alt="desc">`

**See [DEVELOPMENT.md](DEVELOPMENT.md) for:**
- Complete code logic & workflows
- Theme system details
- Image gallery system proposal (lightbox + metadata)
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

## 🖼️ Image Gallery (Proposed System)

### Current Limitations
- ❌ Manual HTML for each image
- ❌ No image metadata (name, description)
- ❌ No full-size view option
- ❌ Doesn't scale for 100s of images

### Proposed Solution: Lightbox + YAML Data

**Data File (_data/gallery.yml):**
```yaml
galleries:
  blues-and-purple:
    title: "Blues & Purple"
    description: "Urban geometry & architecture"
    images:
      - filename: "img-01.jpeg"
        title: "Urban Sunset"
        description: "Light on concrete structures"
        date: "2020-12-16"
```

**Template Loop (Automatic Rendering):**
- Loops through YAML data
- Generates grid with image overlays
- Click opens modal with full image + metadata

**Features:**
✅ Scalable to 1000s of images  
✅ Centralized image management (YAML)  
✅ Full-size lightbox view  
✅ Image title + description display  
✅ Date & metadata support  
✅ Keyboard: ESC to close  

**See [DEVELOPMENT.md](DEVELOPMENT.md#-image-gallery-system-proposal) for complete implementation guide**

---

## 📚 Additional Resources

- **DEVELOPMENT.md** — Complete code documentation
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Last Updated:** April 5, 2026  
**Version:** 2.0+
