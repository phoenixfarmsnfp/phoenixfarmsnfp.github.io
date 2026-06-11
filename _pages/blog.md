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

{% if featured %}
<section class="pf-featured-post">
  <p class="pf-kicker">Featured / Most Recent</p>
  <h2><a href="{{ featured.url | relative_url }}">{{ featured.title }}</a></h2>
  <p class="pf-meta">{{ featured.date | date: "%B %-d, %Y" }}{% if featured.author %} by {{ featured.author }}{% endif %}</p>
  <p>{{ featured.excerpt | strip_html | truncatewords: 55 }}</p>
  <a class="pf-link" href="{{ featured.url | relative_url }}">Read More</a>
</section>

<section class="pf-section">
  <div class="pf-section__heading">
    <p class="pf-kicker">Archive</p>
    <h2>Older posts</h2>
  </div>
  <div class="pf-card-grid pf-card-grid--posts">
    {% for post in sorted_posts offset:1 %}
    <article class="pf-card pf-card--featured pf-post-card">
      <p class="pf-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncatewords: 28 }}</p>
      <a class="pf-link" href="{{ post.url | relative_url }}">Read More</a>
    </article>
    {% endfor %}
  </div>
</section>
{% else %}
<p>No Living Project Blog posts have been added yet.</p>
{% endif %}
