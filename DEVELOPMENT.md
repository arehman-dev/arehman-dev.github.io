# Development Guide — a.rehman Portfolio

**Complete documentation for developers and content creators**

---

## 📋 Table of Contents

1. [Project Architecture](#project-architecture)
2. [Code Logic & Workflows](#code-logic--workflows)
3. [Content Management](#content-management)
4. [Theme System](#theme-system)
5. [Image Gallery System (Proposal)](#image-gallery-system-proposal)
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

## 🖼️ Image Gallery System (Proposal)

### Current Issues
1. **No metadata:** Images show only alt-text
2. **No big view:** Grid thumbnails only
3. **Not scalable:** Manual HTML for each image
4. **No filtering:** All images mixed

### Proposed Solution: Lightbox Gallery with Modal

#### Step 1: Image Data File

Create `_data/gallery.yml`:
```yaml
galleries:
  blues-and-purple:
    title: "Blues & Purple"
    description: "Urban geometry, architectural reflections"
    images:
      - filename: "img-20201216-170952-207-01.jpeg"
        title: "Urban Geometry - Sunset"
        description: "Play of light on concrete structures, architecture speaks geometry"
        date: "2020-12-16"
        
      - filename: "img-20201216-165631-552-01-01.jpeg"
        title: "Reflections"
        description: "Glass reflects the mood of the city"
        date: "2020-12-16"

  nature:
    title: "Walk Into Nature"
    description: "Natural landscapes, greenery"
    images:
      - filename: "img-20201218-114604-397-01-01-01.jpeg"
        title: "Green Path"
        description: "Nature's calm invites introspection"
        date: "2020-12-18"
```

#### Step 2: Liquid Template Loop

In `tasweer-kahani/index.md`:
```liquid
{% for gallery in site.data.gallery.galleries %}
## {{ gallery.title }}
_{{ gallery.description }}_

<div class="photo-grid">
  {% for image in gallery.images %}
    <div class="photo-card" data-title="{{ image.title }}" 
         data-description="{{ image.description }}" 
         data-src="{{ site.baseurl }}/tasweer-kahani/theme-name/{{ image.filename }}">
      <img src="{{ site.baseurl }}/tasweer-kahani/theme-name/{{ image.filename }}" 
           alt="{{ image.title }}"
           loading="lazy"
           class="photo-clickable">
      <div class="photo-overlay">
        <span class="photo-title">{{ image.title }}</span>
      </div>
    </div>
  {% endfor %}
</div>
{% endfor %}
```

#### Step 3: Modal CSS

```css
.photo-modal {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 2000;
    padding: 2rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
}

.photo-modal.active {
    display: flex;
}

.photo-modal-content {
    max-width: 900px;
    width: 100%;
    background: var(--glass-bg);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(20px);
}

.photo-modal-image {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 1.5rem;
}

.photo-modal-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.photo-modal-description {
    font-size: 1rem;
    color: var(--text-muted);
    line-height: 1.6;
}

.photo-modal-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: none;
    border: none;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
}
```

#### Step 4: Modal JavaScript

```javascript
// Photo Gallery Modal
const photoCards = document.querySelectorAll('.photo-clickable');
const modal = document.getElementById('photoModal');
const modalImage = modal.querySelector('.photo-modal-image');
const modalTitle = modal.querySelector('.photo-modal-title');
const modalDescription = modal.querySelector('.photo-modal-description');
const modalClose = modal.querySelector('.photo-modal-close');

photoCards.forEach(card => {
  card.addEventListener('click', (e) => {
    const card = e.target.closest('.photo-card');
    const title = card.dataset.title;
    const description = card.dataset.description;
    const src = card.dataset.src;
    
    modalImage.src = src;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.classList.add('active');
  });
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

// Keyboard: ESC to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.remove('active');
});
```

#### Step 5: HTML Structure

Add to `_layouts/default.html` before `</body>`:
```html
<div id="photoModal" class="photo-modal">
  <button class="photo-modal-close">✕</button>
  <div class="photo-modal-content">
    <img class="photo-modal-image" src="" alt="">
    <div class="photo-modal-title"></div>
    <div class="photo-modal-description"></div>
  </div>
</div>
```

### Benefits
✅ **Scalable:** Add 1000s of images without breaking HTML  
✅ **Metadata:** Each image has title + description  
✅ **Big view:** Modal shows full-size with details  
✅ **Maintainable:** Centralize image data in YAML  
✅ **SEO-friendly:** JSON-LD structured data ready

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

# Link in index.md
<img src="/tasweer-kahani/theme-name/image.jpeg" alt="desc">
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
