---
layout: default
title: Perspective
---

# Perspective — Zawiya e Nazar

A collection of essays exploring intellectual honesty, technology, ethics, and the struggle to maintain principles in an age of compromise.

## Featured Essays

<div class="card-grid">
  <a href="/perspective/on-intellectual-honesty" class="content-card">
    <span class="card-meta">Zawiya e Nazar • Perspective</span>
    <h3>On Intellectual Honesty</h3>
    <p style="font-family: 'Lora', serif;">Exploring the foundation of growth and the commitment to objective truth.</p>
  </a>

  <a href="/perspective/zawiya-nazar-tarbiyat" class="content-card">
    <span class="card-meta">Zawiya e Nazar • Perspective</span>
    <h3>زاویہ نظر: تربیت</h3>
    <p style="font-family: 'Noto Nastaliq Urdu', serif;">تربیت انسان کے کردار کی بنیاد ہے۔۔۔</p>
  </a>
</div>

## All Essays

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
    {% for post in site.posts %}
      {% if post.category == 'perspective' %}
        <a href="{{ post.url }}" class="carousel-card">
          <span class="card-meta">{{ post.date | date: "%B %d, %Y" }}</span>
          <h4>{{ post.title }}</h4>
          <p>{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
        </a>
      {% endif %}
    {% endfor %}
  </div>
</div>
