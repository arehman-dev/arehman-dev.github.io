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

---

## 📁 Project Structure

```
arehman-dev.github.io/
├── _layouts/
│   └── default.html          # Main layout template
├── _includes/
│   └── navigation.html       # Navigation component
├── _posts/                   # Blog posts (currently unused)
├── assets/
│   └── css/
│       └── style.css         # Main stylesheet (SCSS-like with variables)
├── perspective/
│   ├── index.md              # Perspective collection index
│   ├── post-1.md             # Sample essay
│   └── post-2.md             # Urdu content sample
├── poetry/
│   ├── index.md              # Poetry collection index
│   └── iqbal-01.md           # Classical Urdu poetry
├── collections/
│   ├── index.md              # Collections index
│   └── linux-tools.md        # FOSS tools collection
├── about.md                  # About page
├── contact.md                # Contact page (empty)
├── portfolio/
│   └── index.md              # Portfolio page
├── index.md                  # Homepage
├── _config.yml               # Jekyll configuration
├── Gemfile                   # Ruby dependencies
└── README.md                 # This file
```

---

## 🛠️ Technology Stack

- **Static Site Generator**: Jekyll 4.4
- **Hosting**: GitHub Pages
- **CSS**: Custom, no frameworks
- **Fonts**: 
  - **Inter** (sans-serif) - UI, tags
  - **Playfair Display** (serif) - Headings
  - **Lora** (serif) - Body, prose
  - **Noto Nastaliq Urdu** (serif) - Urdu content
- **Icons**: Lucide Icons (unpkg CDN)
- **Theme**: CSS custom properties (variables) with system color-scheme detection

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
- **Card Grid**: Flexible content cards with hover animations
- **Photo Grid**: Responsive image gallery (Tasweer-kahani)
- **Typography**: Semantic HTML with careful font pairing
- **Theme Toggle**: Smooth dark/light mode switch with localStorage persistence

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
- Permalink structure
- Build settings

---

## 📝 Content Structure

### Adding a New Section

1. Create folder: `mkdir section_name`
2. Add `index.md` with content
3. Link in navigation/sidebar

Example `index.md`:
```markdown
---
layout: default
title: Section Title
---

# Section Title

Content here...
```

### Adding Urdu Content

Use inline styles for Urdu fonts:
```html
<div style="font-family: 'Noto Nastaliq Urdu', serif;">
  اردو ٹیکسٹ یہاں
</div>
```

### Adding Blog Posts

Place in `perspective/`, `poetry/`, or `collections/` with YAML front matter:
```markdown
---
layout: default
title: Post Title
lang: en
dir: ltr
---

Content...
```

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
Modify font families and sizes in the main stylesheet:
- Body: `font-family: 'Inter', sans-serif;`
- Headings: `font-family: 'Playfair Display', serif;`

### Layout
Key spacing values (commented with old values for reference):
- Left/Right margins: `88px`
- Max content width: `1100px`
- Sidebar width: `56px`
- Card gap: `2.5rem`

---

## 📊 Performance Notes

- **CSS**: Embedded in HTML (no separate requests)
- **Fonts**: Google Fonts (preconnect + preload for speed)
- **Icons**: Lucide via CDN (SVG rendering, no webfont bloat)
- **Images**: Lazy loading enabled on photo cards
- **No JavaScript**: Zero custom JS overhead beyond theme toggle

---

## 🌍 Deployment

This site is deployed to GitHub Pages:

1. **Repository**: arehman-dev/arehman-dev.github.io
2. **Branch**: `main` (automatically published)
3. **Theme**: Disabled (custom theme only)
4. **Build**: Jekyll 4.4

### Deploy Steps

```bash
git add .
git commit -m "message"
git push origin main
```

GitHub Pages rebuilds automatically (~1-2 minutes).

---

## 🐛 Known Issues & Improvements

- [ ] Light theme glows (90% zoom) — investigate CSS selector specificity
- [ ] Add Tasweer-kahani photography index
- [ ] Expand blog collections with more posts
- [ ] Add search functionality
- [ ] SEO optimization (meta tags, structured data)
- [ ] Accessibility audit (WCAG 2.1)

---

## 📜 License

This site and its content are personal. Code structure available for reference/inspiration.

---

## 👤 About

**Name**: A. Rehman  
**Role**: I.T. Professional & Digital Craftsman  
**Philosophy**: Conscious servitude, intellectual honesty, pursuit of *al-ʿIlm*

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
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

*Handcrafted with perfectionism. Built for resilience.*
