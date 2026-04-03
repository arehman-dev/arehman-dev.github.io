---
layout: default
title: Archive
permalink: /archive/
---

# Archive

Browse all posts organized by date.

<div id="archive-container">
{% assign sorted_posts = site.posts | sort: date | reverse %}
{% assign current_year = '' %}

{% for post in sorted_posts %}
  {% assign post_year = post.date | date: "%Y" %}
  
  {% if post_year != current_year %}
    {% if current_year != '' %}</ul>{% endif %}
    <h2>{{ post_year }}</h2>
    <ul>
    {% assign current_year = post_year %}
  {% endif %}
  
  <li>
    <span class="archive-date">{{ post.date | date: "%B %d" }}</span>
    <a href="{{ post.url }}" class="archive-link">{{ post.title }}</a>
    {% if post.tags %}
      <span class="archive-tags">
        {% for tag in post.tags %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </span>
    {% endif %}
  </li>
{% endfor %}

{% if current_year != '' %}</ul>{% endif %}
</div>

<style>
#archive-container h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--text-main);
  border-bottom: 1px solid var(--card-border);
  padding-bottom: 0.5rem;
}

#archive-container ul {
  list-style: none;
  padding: 0;
}

#archive-container li {
  padding: 0.8rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.archive-date {
  color: var(--text-muted);
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  min-width: 100px;
}

.archive-link {
  color: var(--text-main);
  text-decoration: none;
  transition: color 0.2s ease;
  flex-grow: 1;
}

.archive-link:hover {
  color: var(--accent);
}

.archive-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  background: var(--card-border);
  color: var(--text-muted);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}
</style>
