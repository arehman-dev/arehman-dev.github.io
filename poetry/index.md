---
layout: default
title: Poetry — Ashaar
---

# Poetry — Ashaar

A collection of verse exploring the self, discipline, resilience, and the eternal struggle between comfort and excellence.

## Featured Works

<div class="card-grid">
  <a href="/poetry/alamah-iqbal-khudi" class="content-card" dir="rtl">
    <span class="card-meta" style="text-align: right; font-family: 'Noto Nastaliq Urdu', serif;">Ashaar • شاعری</span>
    <h3 style="font-family: 'Noto Nastaliq Urdu', serif;">علامہ اقبال: خودی</h3>
    <p style="font-family: 'Noto Nastaliq Urdu', serif;">خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے</p>
  </a>
</div>

## All Works

<div class="posts-carousel">
  <div class="carousel-track">
    {% for post in site.posts %}
      {% if post.category == 'poetry' %}
        <a href="{{ post.url }}" class="carousel-card">
          <span class="card-meta">{{ post.date | date: "%B %d, %Y" }}</span>
          <h4>{{ post.title }}</h4>
          <p>{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
        </a>
      {% endif %}
    {% endfor %}
  </div>
  <button class="carousel-nav prev" title="Scroll left">
    <i data-lucide="chevron-left" style="width: 20px; height: 20px;"></i>
  </button>
  <button class="carousel-nav next" title="Scroll right">
    <i data-lucide="chevron-right" style="width: 20px; height: 20px;"></i>
  </button>
</div>
