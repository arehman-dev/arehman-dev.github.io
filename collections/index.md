---
layout: default
title: Collections
---

# Collections

Curated resources, tools, and knowledge bases for digital resilience, privacy, open-source, and conscious computing.

## Featured Collections

<div class="card-grid">
  <a href="/collections/linux-tools" class="content-card">
    <span class="card-meta">Tools & Resources</span>
    <h3>FOSS Tools for Privacy & Freedom</h3>
    <p style="font-family: 'Lora', serif;">A selection of open-source tools for maintaining digital sovereignty and privacy.</p>
  </a>
</div>

## All Collections

<div class="posts-carousel">
  <div class="carousel-track">
    {% for post in site.posts %}
      {% if post.category == 'collections' %}
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
