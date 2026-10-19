# Color System & Styling Guidelines — Unified `v3.0`

This document defines the unified color variables, frosted glass tokens, ambient canvas gradients, and reading-comfort palettes shared across the **Technical Portfolio (`/`)** (`src/styles/global.css`) and the **Personal Editorial Space (`/me/`)** (`src/styles/personal.css`).

---

## 🎨 Core Brand & Accent Palette

### 1. Primary Brand: Emerald Suite (`--primary` / `--accent`)
Used for primary CTAs, active navigation states,poetry category signatures, `#` hashtag prefixes, and positive status indicators.
- **Green-50 (Light Tint)**: `#f0f9f4`
- **Green-500 (Primary Brand)**: `#01ac6a`
- **Green-900 (Deep Emerald)**: `#1c5c39`

### 2. Secondary Editorial & Structural: Ocean Blue Suite (`--secondary`)
Used for section eyebrows, perspective category signatures, reading-time metadata, secondary anchors, and dual-accent gradients.
- **Blue-50 (Light Tint)**: `#f0f6ff`
- **Blue-500 (Light Mode Secondary)**: `#397bc9`
- **Blue-400 (Dark Mode Secondary)**: `#5899e2` (Lifted in OLED dark mode for high legibility)
- **Blue-900 (Deep Navy)**: `#071e61`

### 3. Tertiary & Status: Neon & Teal Suite
- **Collections Signature Teal**: `#2292a4`
- **Neon-500 (Status / Terminal Highlights)**: `#c0ff14`
- **Neon-900 (Light Mode Neon Text)**: `#4c6800`

---

## 🌓 Unified Theme Surfaces (Light & Pitch Black OLED)

### Light Theme (`:root`)
- **Main Canvas (`--bg-main`)**: `#f7f9fa` (Crisp editorial off-white)
- **Heading Text (`--text-main`)**: `#212529`
- **Eye-Comfort Body Text (`--text-body-comfort`)**: `#2c333a`
- **Muted Metadata (`--text-muted`)**: `#5a626a`
- **Frosted Glass Surfaces**:
  - `--glass-bg`: `rgba(255, 255, 255, 0.78)` (`backdrop-filter: blur(20px) saturate(180%)`)
  - `--glass-card-bg`: `rgba(255, 255, 255, 0.84)`
  - `--card-border`: `rgba(7, 30, 97, 0.09)`

### Dark Theme (`html.dark` / `html[data-theme="dark"]`)
- **Main Canvas (`--bg-main`)**: `#000000` (True Pitch Black OLED)
- **Heading Text (`--text-main`)**: `#e6edf3` (`#ffffff` for display headers)
- **Eye-Comfort Body Text (`--text-body-comfort`)**: `#c8d0d8` (Calibrated to eliminate OLED halation)
- **Muted Metadata (`--text-muted`)**: `#9ca3af`
- **Smoked Obsidian Glass Surfaces**:
  - `--glass-bg`: `rgba(12, 14, 18, 0.82)` (`backdrop-filter: blur(20px) saturate(180%)`)
  - `--glass-card-bg`: `rgba(14, 17, 22, 0.80)`
  - `--card-border`: `rgba(57, 123, 201, 0.16)`

---

## 🌌 Fixed Ambient Canvas (`BG-4` Horizon Skylight + Architectural Grid)

In `/me/`, `body.personal-space-body::before` renders a fixed, non-repeating viewport canvas:
- **Top-Down Dual Skylight Glows**:
  - Left-Center Ocean Blue Skylight (`32% -6%`): `rgba(57, 123, 201, 0.16)` (Light) / `rgba(57, 123, 201, 0.19)` (Dark)
  - Right-Center Emerald Skylight (`68% -6%`): `rgba(1, 172, 106, 0.13)` (Light) / `rgba(1, 172, 106, 0.15)` (Dark)
  - Deep Navy Crown (`50% -10%`): `rgba(7, 30, 97, 0.06)` (Light) / `rgba(7, 30, 97, 0.28)` (Dark)
- **Architectural Grid Overlay**:
  - Light Mode: `40px × 40px` hairline grid at `rgba(7, 30, 97, 0.018)`
  - Dark Mode: `38px × 38px` hairline grid at `rgba(255, 255, 255, 0.016)`

---

## 📖 Eye-Comfort Article Reading Palettes (`data-reader-theme`)

Both `/articles/[slug]/` and `/me/[category]/[slug]/` support 4 persistent reading comfort themes:

| Mode | Canvas Background | Heading Text | Body Text | Border / Accent |
| :--- | :--- | :--- | :--- | :--- |
| **`default`** | Theme `--bg-main` | `--text-main` | `--text-body-comfort` | `--card-border` |
| **`sepia`** | `#f4ecd8` | `#231915` | `#3b2f2f` | `rgba(92, 75, 55, 0.18)` |
| **`sepia-contrast`** *(Sepia Dark)* | `#16120e` | `#f5ebe0` | `#dfd3c3` | `rgba(212, 163, 89, 0.20)` |
| **`soft-contrast`** | `#181d23` | `#e8eef4` | `#cdd6df` | `rgba(57, 123, 201, 0.22)` |
