# Development Guide — a.rehman Portfolio

**Complete documentation for developers and content creators**

---

## 📋 Table of Contents

1. [Project Architecture](#project-architecture)
2. [Code Logic & Workflows](#code-logic--workflows)
3. [Content Management](#content-management)
4. [Theme System](#theme-system)
5. [Image Gallery System](#image-gallery-system)
6. [Deployment](#deployment)

---

## 🏗️ Project Architecture

### Tech Stack
- **Generator**: Jekyll 4.4 (static site)
- **Hosting**: GitHub Pages
- **CSS**: Custom (no frameworks), Glass morphism design
- **JavaScript**: Vanilla (no dependencies)
- **Fonts**: Google Fonts (Inter, Lora, Playfair Display, Noto Nastaliq)
- **Icons**: Lucide Icons (CDN)

### Directory Structure

```
arehman-dev.github.io/
├── _layouts/
│   └── default.html          # Master template (all pages)
├── _includes/
│   └── navigation.html       # Navigation component (unused, embed in default.html)
├── _posts/                   # Blog posts (auto-collected by Jekyll)
│   └── YYYY-MM-DD-title.md
├── perspective/              # Essays collection
│   ├── index.md              # Collection page
│   ├── on-intellectual-honesty.md
│   └── zawiya-nazar-tarbiyat.md
├── poetry/                   # Poetry collection
│   ├── index.md
│   └── alamah-iqbal-khudi.md
├── collections/              # Topic collections
│   ├── index.md
│   └── foss-tools-privacy.md
├── tasweer-kahani/           # Photography/Gallery
│   ├── index.md              # Main gallery page
│   ├── home-page-grid/       # Images for homepage
│   ├── theme-blues-and-purple/
│   ├── theme-walk-into-nature/
│   └── more/
├── assets/
│   └── css/
│       └── style.css         # All styles (600+ lines)
├── about.md                  # About page
├── archive.md                # Archive by date
├── _config.yml               # Jekyll config
└── README.md                 # Quick start guide
```

---

## 🔄 Code Logic & Workflows

### 1. Theme System (Light/Dark Mode)

**Logic Flow:**
```
User visits page
  ↓
JavaScript checks localStorage for "theme" key
  ↓
If not found: Check OS preference via window.matchMedia('(prefers-color-scheme: dark)')
  ↓
Add class="dark" to <html> root element
  ↓
CSS variables in :root adjust for dark theme
  ↓
When user clicks theme toggle:
   → Toggle class="dark" on <html>
   → Save preference to localStorage
   → All colors update automatically via CSS variables
```

**CSS Variables:**
```css
:root {
    --bg-grad-1: #f8fbff;              /* Light background start */
    --bg-grad-2: #f4fbf7;              /* Light background end */
    --text-main: #071e61;              /* Primary text */
    --text-muted: #397bc9;             /* Secondary text */
    --accent: #01ac6a;                 /* Highlight color (green) */
    --glass-bg: rgba(255, 255, 255, 0.7);  /* Glass effect opacity */
    --card-border: rgba(7, 30, 97, 0.1);   /* Border color */
}

.dark {
    --bg-grad-1: #030b1c;              /* Dark background start */
    --bg-grad-2: #05140d;              /* Dark background end */
    --text-main: #f0f9f4;              /* Light text */
    --text-muted: #8ed5ab;             /* Light secondary */
    --accent: #00ff9d;                 /* Bright green */
    --glass-bg: rgba(10, 15, 25, 0.6); /* Darker glass */
    --card-border: rgba(255, 255, 255, 0.1);
}
```

**All UI components use these variables automatically → Theme switching = instant, no re-render**

---

### 2. Navigation & Layout

**Top Bar (Sticky Navigation):**
```css
.top-bar-container {
    position: sticky;          /* Sticks to top (20px offset) */
    top: 20px;
    z-index: 900;              /* Above all content */
}

.glass-top-bar {
    background: var(--glass-bg);
    backdrop-filter: blur(16px);   /* Glass effect */
    border-radius: 20px;       /* Rounded edges */
}
```

**Dropdown Menu (Right-aligned):**
```css
.dropdown-menu {
    position: absolute;
    top: 100%;                 /* Below the toggle button */
    right: 0;                  /* Aligns to right edge */
    background: rgba(255, 255, 255, 0.85);  /* Strong glass */
    backdrop-filter: blur(20px);   /* Heavy blur for clarity */
    transform: translateY(-5px);   /* Slides up on hover */
}

.dropdown:hover .dropdown-menu {
    transform: translateY(0);   /* Slide down animation */
}
```

---

### 3. Card Animations

**Stagger Effect:** Cards appear sequentially when scrolling into view

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay each card by index * 80ms
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, index * 80);
      }
    });
  });
  
  // Observe all .has-animation elements
  document.querySelectorAll('.has-animation').forEach(el => {
    observer.observe(el);
  });
});
```

**CSS:**
```css
.has-animation {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.has-animation.is-visible {
    opacity: 1;
    transform: translateY(0);
}
```

---

### 4. Image Gallery Grid

**Current System:**
```markdown
<div class="photo-grid">
  <div class="photo-card">
    <img src="/path/to/image.jpeg" alt="Description" loading="lazy">
  </div>
</div>
```

**CSS (Responsive Grid):**
```css
.photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.photo-card img {
    width: 100%;
    height: 400px;
    object-fit: cover;               /* Crops to fit */
    border-radius: 16px;
    transition: transform 0.6s;
}

.photo-card:hover img {
    transform: scale(1.08);          /* Zoom on hover */
}
```

**Issues:**
- ❌ No image metadata (name, description)
- ❌ No full-size image view
- ❌ Grid only; doesn't scale for hundreds of images
- ❌ No filtering/categorization

---

## 📝 Content Management

### Adding a Blog Post

**1. Create file:** `_posts/YYYY-MM-DD-title.md`

```markdown
---
layout: default
title: "Post Title"
category: perspective       # or poetry, collections
tags: [tag1, tag2]
excerpt: "Brief summary for preview"
date: 2026-04-05
---

# Post Title

Your content here...
```

**2. Jekyll auto-collects** by date and category

**3. Archive page** automatically lists all posts by date

---

### Adding Content to Collections

**1. Create:** `perspective/my-essay.md` (or poetry/, collections/)

```markdown
---
layout: default
title: "Essay Title"
---

Content...
```

**2. Collection index** (perspective/index.md) automatically grabs all posts with category: perspective

**3. URL structure:** `/perspective/essay-title/` (from `_config.yml` permalink setting)

---

### Adding Images

**Current Manual Process:**

1. Upload image to `/tasweer-kahani/theme-name/` folder
2. Add to `tasweer-kahani/index.md`:

```html
<div class="photo-card">
  <img src="/tasweer-kahani/theme-name/image-filename.jpeg" 
       alt="Descriptive text" 
       loading="lazy">
</div>
```

**File Naming Convention:**
- Use descriptive names: `img-20240615-sunset-mountain-01.jpeg`
- Not: `IMG_1234.jpg` (unclear)
- Include date prefix for sorting

---

## 🎨 Theme System Details

### Light Mode Colors
```
Primary Text:   #071e61 (Dark Blue)
Secondary Text: #397bc9 (Medium Blue)
Accent:         #01ac6a (Green)
Background:     #f8fbff → #f4fbf7 (Gradient)
Glass BG:       rgba(255, 255, 255, 0.7)
```

### Dark Mode Colors
```
Primary Text:   #f0f9f4 (Light Green)
Secondary Text: #8ed5ab (Light Green)
Accent:         #00ff9d (Bright Green)
Background:     #030b1c → #05140d (Gradient)
Glass BG:       rgba(10, 15, 25, 0.6)
```

### Typography
- **Headings (h1, h2, h3):** Playfair Display (serif)
- **Body Text:** Lora (serif)
- **UI/Tags:** Inter (sans-serif)
- **Urdu:** Noto Nastaliq Urdu (serif)

### Component Styling

**Glass Morphism:**
```css
background: var(--glass-bg);
backdrop-filter: blur(16px);
border: 1px solid var(--card-border);
border-radius: 20px;
box-shadow: 0 15px 35px rgba(0,0,0,0.1);
```

Applies to: Top bar, dropdown, cards, buttons

---

## 🖼️ Image Gallery System

### ✅ Implementation Complete & Fully Functional

**All features tested and verified working:**
- Click images to open fullscreen modal
- Navigate with buttons & keyboard (← →)
- ESC to close or click background
- Image captions display
- Responsive on all screen sizes
- Dark theme support
- Scalable to unlimited images

The tasweer-kahani page now uses an interactive modal-based gallery system with full image navigation and metadata support.

### Architecture

#### 1. Data File: `_data/gallery.yml`

All gallery images stored in YAML structure grouped by theme:

```yaml
galleries:
  blues-and-purple:
    title: "Blues & Purple"
    description: "Urban geometry, architectural reflections, and introspective moods."
    images:
      - path: "/tasweer-kahani/theme-blues-and-purple/img-20201216-170952-207-01.jpeg"
        alt: "Blues & Purple 1"
      - path: "/tasweer-kahani/theme-blues-and-purple/img-20201216-165631-552-01-01.jpeg"
        alt: "Blues & Purple 2"
      # ... more images
```

**Benefits:**
- Single source of truth for all gallery data
- Centralized image management
- Easy to add/remove images
- Scalable to 1000+ images without HTML bloat

#### 2. Template: `tasweer-kahani/index.md`

Uses Liquid loops to dynamically render galleries from YAML:

```liquid
{% for gallery in site.data.gallery.galleries %}
## {{ gallery[1].title }}

_{{ gallery[1].description }}_

<div class="photo-grid">
  {% for image in gallery[1].images %}
  <div class="photo-card" data-image="{{ image.path }}" 
       data-alt="{{ image.alt }}" role="button" tabindex="0">
    <img src="{{ image.path }}" alt="{{ image.alt }}" loading="lazy">
  </div>
  {% endfor %}
</div>
{% endfor %}
```

**Reduces code:**
- Old: ~100 lines of manual HTML
- New: ~15 lines of template

#### 3. Styling: `assets/css/style.css`

**Photo Card (Interactive Grid):**
```css
.photo-card {
    cursor: pointer;
    border-radius: 16px;
    transition: all 0.4s ease;
    position: relative;
}

.photo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

**Modal Overlay:**
```css
.photo-modal {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.85);
    z-index: 2000;
    display: none;
    align-items: center;
    justify-content: center;
}

.photo-modal.active { display: flex; }

.photo-modal-image {
    max-width: 90%;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 12px;
}
```

**Navigation & Close:**
```css
.photo-modal-nav {
    position: absolute;
    width: 45px; height: 45px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.photo-modal-nav.prev { left: 20px; }
.photo-modal-nav.next { right: 20px; }
```

#### 4. JavaScript: `_layouts/default.html`

**Key Functionality:**

1. **Gallery Grouping:** Dynamically groups images by parent gallery section
2. **Modal Opening:** Click any photo-card to open modal with that image
3. **Navigation:**
   - Click prev/next buttons to navigate gallery
   - Arrow keys (← →) for keyboard navigation
   - ESC to close modal
4. **Accessibility:** ARIA labels, keyboard support, focus management

```javascript
// Open modal with specific gallery and index
function openModal(gallery, index) {
  currentGallery = gallery;
  currentIndex = index;
  showImage();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Navigation
function nextImage() {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  showImage();
}
```

**Modal HTML:**
```html
<div id="photo-modal" class="photo-modal">
  <div class="photo-modal-content">
    <button id="modal-close" class="photo-modal-close">&times;</button>
    <img id="modal-image" class="photo-modal-image" src="" alt="">
    <button id="modal-prev" class="photo-modal-nav prev">❮</button>
    <button id="modal-next" class="photo-modal-nav next">❯</button>
    <div id="modal-caption" class="photo-modal-caption"></div>
  </div>
</div>
```

### Features

| Feature | Before | After |
|---------|--------|-------|
| Image Management | Manual HTML per image | YAML data file |
| Code Size (tasweer-kahani/index.md) | ~120 lines | ~15 lines |
| Add 20 New Images | Edit HTML directly | Add 20 lines to YAML |
| Image Metadata | Alt-text only | Full caption support |
| Viewing Experience | Grid view only | Modal lightbox |
| Navigation | None | Prev/Next + keyboard |
| Scalability | Breaks at 100+ images | Unlimited |

### Usage

#### Adding New Images

1. **Upload image file** to `tasweer-kahani/[theme-folder]/`
2. **Add to `_data/gallery.yml`:**

```yaml
galleries:
  blues-and-purple:
    images:
      - path: "/tasweer-kahani/theme-blues-and-purple/new-image.jpeg"
        alt: "Image Description"
```

3. **Rebuild site:**
```bash
bundle exec jekyll serve
```

#### Modifying Galleries

Edit `_data/gallery.yml`:
- Change image order (reorder list)
- Update descriptions (edit `alt` field)
- Move images between galleries (cut/paste YAML blocks)
- Remove images (delete YAML entry)

### Performance Notes

- Modal images displayed with `object-fit: contain` (maintains aspect ratio)
- Lazy loading on grid `<img>` tags (defer load until visible)
- Modal doesn't pre-cache images (loads on click)
- Smooth animations with CSS transforms (GPU-accelerated)

---

## 🚀 Deployment

### Local Testing
```bash
bundle exec jekyll serve
# Visit http://localhost:4000
```

### Push to GitHub Pages
```bash
git add -A
git commit -m "Add content/fix"
git push origin main
```

**GitHub Pages automatically:**
- Builds Jekyll
- Deploys to arehman-dev.github.io
- Takes ~30-60 seconds

### Build Settings
See `_config.yml`:
```yaml
future: false                      # Don't publish future-dated posts
permalink: /:categories/:title/    # URL structure
plugins:
  - jekyll-feed                    # RSS feed
  - jekyll-seo-tag                 # SEO meta tags
  - jekyll-sitemap                 # sitemap.xml
```

---

## 📚 Quick Reference

### Add Blog Post
```bash
# Create file
_posts/2026-04-05-title.md

# Add front matter
---
layout: default
title: "Title"
category: perspective
tags: [tag1]
---

Content...
```

### Add Collection Post
```bash
perspective/title.md
poetry/title.md
collections/title.md
```

### Add Image
```bash
# Upload to folder
tasweer-kahani/theme-name/image.jpeg

# Add to _data/gallery.yml
galleries:
  [theme-name]:
    images:
      - path: "/tasweer-kahani/theme-name/image.jpeg"
        alt: "description"
```

### Update Config
Edit `_config.yml` for:
- Site title
- URL
- Social links
- Collections paths

---

**Last Updated:** April 5, 2026  
**Version:** 2.0 + Proposal
