---
layout: default
title: Home
---

# half artist & half thinker

_Welcome to my corner of the web. I am a man who speaks less, thinks far more._

_A student of knowledge, pursuing a career in I.T. I occasionally write here, share visuals from my lens, and reflect on art that resonates with me._


_This space is a collection of my writings and perspectives: an effort to document my life—a window into how I observe, what I ponder._

<!-- _Welcome to my corner of the web. I am a man who speak less, thinks far more. Student of knowledge pursuing a career in I.T._
_I occasionally writes here, share visuals from my lens, and reflect on art that resonates with me._

_This space is a collection of my writings and perspectives: a humble effort to document a life._
_a window of my life_ -->

## Featured Writings

<div class="card-grid">
  <a href="/perspective/on-intellectual-honesty" class="content-card">
    <span class="card-meta">Zawiya e Nazar • Perspective</span>
    <h3>On Intellectual Honesty</h3>
    <p style="font-family: 'Lora', serif;">Exploring the foundation of growth and the commitment to objective truth.</p>
  </a>

  <a href="/poetry/alamah-iqbal-khudi" class="content-card" dir="rtl">
    <span class="card-meta" style="text-align: right;">Ashaar • Poetry</span>
    <h3 style="font-family: 'Noto Nastaliq Urdu', serif;">علامہ اقبال: خودی</h3>
    <p style="font-family: 'Noto Nastaliq Urdu', serif;">خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے</p>
  </a>
</div>

## All Writings

<div class="carousel-header">
  <div class="carousel-controls">
    <button class="carousel-nav prev" title="Scroll left">
      <i data-lucide="chevron-left" style="width: 18px; height: 18px;"></i>
    </button>
    <button class="carousel-nav next" title="Scroll right">
      <i data-lucide="chevron-right" style="width: 18px; height: 18px;"></i>
    </button>
  </div>
</div>

<div class="posts-carousel">
  <div class="carousel-track">
    {% for post in site.posts limit: 10 %}
      <a href="{{ post.url }}" class="carousel-card">
        <span class="card-meta">{{ post.category | capitalize }} • {{ post.date | date: "%b %d" }}</span>
        <h4>{{ post.title }}</h4>
        <p>{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
      </a>
    {% endfor %}
  </div>
</div>

## Tasweer-kahani (Stories from the Lens)

*Perspective & visuals through my lens.*

<div class="photo-grid">
  <div class="photo-card">
    <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80" alt="Architecture Sample 1" loading="lazy">
  </div>
  <div class="photo-card">
    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" alt="Architecture Sample 2" loading="lazy">
  </div>
  <div class="photo-card">
    <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&q=80" alt="Nature Sample" loading="lazy">
  </div>
</div>
