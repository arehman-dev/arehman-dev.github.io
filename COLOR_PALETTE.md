# Color System & Styling Guidelines — V2 Evolved

This document defines the custom variables, color weights, semantic aliases, and guidelines implemented in the design system of the portfolio website.

---

## 🎨 Color System Variables

The color variables are declared globally in `src/styles/global.css`.

### 1. Primary Colors: Green Suite
Used for positive feedback, primary buttons, logo highlight, action buttons, and active text link highlights.
*   **Green-50 (Light Backgrounds)**: `#f0f9f4` (Light backgrounds, highlights)
*   **Green-500 (Primary Brand)**: `#01ac6a` (Main action button background, headings gradient)
*   **Green-900 (Dark Accent)**: `#1c5c39` (Deep background, dark overlays, gradient endings)

### 2. Secondary Colors: Blue Suite
Used for info states, contact button triggers, secondary anchors, and visual structure accents.
*   **Blue-50 (Light backgrounds)**: `#f0f6ff` (Secondary container backgrounds)
*   **Blue-500 (Secondary Accent)**: `#397bc9` (Secondary CTAs, email triggers, gradient overlays)
*   **Blue-900 (Dark Accent)**: `#071e61` (Deep dark cards details, text shadows in dark theme)

### 3. Accent Colors: Neon Suite
Used cautiously to make status tags pop, border glows, active indicators, and blinking cursor effects.
*   **Neon-50 (Light Accent Backgrounds)**: `#f1ffcc` (Subtle learning highlights)
*   **Neon-500 (Bold Highlights)**: `#c0ff14` (Status tags text, active outline halos, blinking icons)
*   **Neon-900 (Dark Neon Text)**: `#4c6800` (Contrast text on light backgrounds)

---

## 🌓 Theme Styles & Background Textures

### Light Theme
-   **Main Background**: `#f7f9fa` (Clean off-white)
-   **Main Text**: `#212529` (High-contrast dark gray)
-   **Containers**: `rgba(255, 255, 255, 0.75)` with `backdrop-filter: blur(12px)`
-   **Gradients**: Smooth subtle colors to establish visual depth.

### Dark Theme (OLED Optimized)
-   **Main Background**: `#161616` (Deep dark gray, NOT pitch black to avoid visual fatigue)
-   **Main Text**: `#f3f4f6` (Off-white reading text)
-   **Borders**: `rgba(255, 255, 255, 0.08)`
-   **Grid & Noise Texture**:
    -   Fine fractal noise SVG image overlay at `0.018` opacity.
    -   Repeating 36px linear grid lines at `0.012` opacity.
    -   Radial green glow centered at top-center (`rgba(1, 172, 106, 0.07)`).

---

## 🛠️ Usage Guidelines

1.  **Semantic Mapping**:
    -   Use `var(--primary)` for primary CTAs and active indicators.
    -   Use `var(--secondary)` for secondary actions (e.g. Email links, details views).
    -   Use `var(--accent)` for dynamic highlights (e.g. "In Progress" or "Learning" badges).
2.  **Contrast & Accessibility**:
    -   Ensure text on button hover maintains its contrast.
    -   Avoid putting bright neon text directly on pure white backgrounds without employing `--neon-900`.
