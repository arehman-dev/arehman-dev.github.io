---
layout: default
title: Tasweer Kahani — Stories from the Lens
---

# Tasweer Kahani — Stories from the Lens

_Perspective and visuals through my lens._

Photography, for me, is a practice of observation. It's about pausing long enough to notice what moves the eye—light filtering through spaces, the geometry of human structures, moments where nature and architecture speak to one another. Each frame is an attempt to capture not just what is visible, but what it means.

These images are drawn from moments of travel, contemplation, and the everyday. They're imperfect, sincere attempts to translate what I observe into something shareable, grounded in the belief that how we see shapes how we think.

{% for gallery in site.data.gallery.galleries %}
## {{ gallery[1].title }}

_{{ gallery[1].description }}_

<div class="photo-grid" data-gallery="{{ gallery[0] }}">
  {% for image in gallery[1].images %}
  <div class="photo-card" data-gallery="{{ gallery[0] }}" data-image="{{ image.path }}" data-alt="{{ image.alt }}" role="button" tabindex="0">
    <img src="{{ image.path }}" alt="{{ image.alt }}" loading="lazy">
  </div>
  {% endfor %}
</div>
{% endfor %}

---

_Photography reminds me that the world is always offering itself—we just need to slow down enough to notice._
