---
title: "Living Project Blog"
permalink: /blog/
layout: single
author_profile: false
---

<section class="pf-page-intro">
  <p class="pf-kicker">Living Project Blog</p>
  <h1>Updates from the food forest.</h1>
  <p>Planting notes, harvest observations, community events, internship research, and seasonal lessons from Phoenix Farms.</p>
</section>

{% assign sorted_posts = site.posts | sort: "date" | reverse %}
{% assign featured = sorted_posts | first %}
{% assign posts_by_year = sorted_posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% assign sorted_tags = site.tags | sort %}

{% if featured %}
{% assign featured_thumbnail = site.static_files | where: "path", featured.thumbnail | first %}
<section class="pf-blog-filters" aria-labelledby="blog-filter-heading">
  <div>
    <p class="pf-kicker">Find Posts</p>
    <h2 id="blog-filter-heading">Filter the blog</h2>
  </div>
  <div class="pf-blog-filters__controls">
    <label for="blog-year-filter">
      Year
      <select id="blog-year-filter">
        <option value="">All years</option>
        {% for year in posts_by_year %}
        <option value="{{ year.name }}">{{ year.name }}</option>
        {% endfor %}
      </select>
    </label>
    <label for="blog-tag-filter">
      Tag
      <select id="blog-tag-filter">
        <option value="">All tags</option>
        {% for tag in sorted_tags %}
        <option value="{{ tag[0] | downcase | escape }}">{{ tag[0] }}</option>
        {% endfor %}
      </select>
    </label>
    <button class="btn pf-blog-filters__clear" id="blog-filter-clear" type="button">Clear filters</button>
  </div>
  <p class="pf-blog-filters__status" id="blog-filter-status" aria-live="polite"></p>
  <noscript>
    <nav class="pf-blog-tools" aria-label="Browse the blog">
      <a class="btn" href="{{ '/blog/archive/' | relative_url }}">Browse by year</a>
      <a class="btn" href="{{ '/blog/tags/' | relative_url }}">Browse by tag</a>
    </nav>
  </noscript>
</section>

<section class="pf-featured-post js-blog-post{% if featured_thumbnail %} pf-featured-post--has-image{% endif %}" data-year="{{ featured.date | date: '%Y' }}" data-tags="|{{ featured.tags | join: '|' | downcase | escape }}|">
  {% if featured_thumbnail %}
  <a class="pf-featured-post__media" href="{{ featured.url | relative_url }}" aria-label="Read {{ featured.title }}">
    <img src="{{ featured.thumbnail | relative_url }}" alt="{{ featured.thumbnail_alt | default: featured.title | escape }}">
  </a>
  {% endif %}
  <div class="pf-featured-post__body">
    <p class="pf-kicker">Featured / Most Recent</p>
    <h2><a href="{{ featured.url | relative_url }}">{{ featured.title }}</a></h2>
    <p class="pf-meta">{{ featured.date | date: "%B %-d, %Y" }}{% if featured.author %} by {{ featured.author }}{% endif %}</p>
    <p>{{ featured.excerpt | strip_html | truncatewords: 55 }}</p>
    <a class="pf-link" href="{{ featured.url | relative_url }}">Read More</a>
  </div>
</section>

<section class="pf-section">
  <div class="pf-section__heading">
    <p class="pf-kicker">Archive</p>
    <h2>Older posts</h2>
  </div>
  <div class="pf-card-grid pf-card-grid--posts">
    {% for post in sorted_posts offset:1 %}
    {% assign post_thumbnail = site.static_files | where: "path", post.thumbnail | first %}
    <article class="pf-card pf-card--featured pf-post-card js-blog-post{% if post_thumbnail %} pf-post-card--has-image{% endif %}" data-year="{{ post.date | date: '%Y' }}" data-tags="|{{ post.tags | join: '|' | downcase | escape }}|">
      {% if post_thumbnail %}
      <a class="pf-post-card__media" href="{{ post.url | relative_url }}" aria-label="Read {{ post.title }}">
        <img src="{{ post.thumbnail | relative_url }}" alt="{{ post.thumbnail_alt | default: post.title | escape }}">
      </a>
      {% endif %}
      <div class="pf-post-card__body">
        <p class="pf-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
        <a class="pf-link" href="{{ post.url | relative_url }}">Read More</a>
      </div>
    </article>
    {% endfor %}
  </div>
  <div class="pf-coming-soon pf-blog-filters__empty" id="blog-filter-empty" hidden>
    <p class="pf-kicker">No Matches</p>
    <h3>No posts match those filters.</h3>
    <p>Try another year or tag, or clear the filters to see everything.</p>
  </div>
</section>
<script src="{{ '/assets/js/blog-filter.js' | relative_url }}" defer></script>
{% else %}
<p>No Living Project Blog posts have been added yet.</p>
{% endif %}
