---
title: "Our Forest"
permalink: /our-forest/
layout: single
author_profile: false
---

<section class="pf-page-intro">
  <p class="pf-kicker">Our Forest</p>
  <h1>Food forests rooted in community.</h1>
  <p>Meet the living sites Phoenix Farms and our partners are growing together across Chicago.</p>
</section>

{% assign sorted_forests = site.forests | sort: "age" | reverse %}
{% assign featured = sorted_forests | first %}

{% if featured %}
{% assign featured_image = site.static_files | where: "path", featured.thumbnail | first %}
<article class="pf-forest-feature">
  <a class="pf-forest-feature__link" href="{{ featured.url | relative_url }}" aria-label="Visit {{ featured.title }}"></a>
  <div class="pf-forest-feature__image">
    {% if featured_image %}
      <img src="{{ featured.thumbnail | relative_url }}" alt="{{ featured.thumbnail_alt | default: featured.title | escape }}">
    {% else %}
      <div class="pf-forest-feature__placeholder">Forest image coming soon</div>
    {% endif %}
  </div>
  <div class="pf-forest-feature__body">
    <p class="pf-kicker">Featured Forest</p>
    <h2>{{ featured.title }}</h2>
    <dl class="pf-forest-facts">
      <div>
        <dt>Age</dt>
        <dd>{{ featured.age }} {% if featured.age == 1 %}year{% else %}years{% endif %}</dd>
      </div>
      <div>
        <dt>Partner</dt>
        <dd>{{ featured.partner }}</dd>
      </div>
      <div class="pf-forest-facts__wide">
        <dt>Address</dt>
        <dd>{{ featured.address }}</dd>
      </div>
      <div class="pf-forest-facts__wide">
        <dt>Plants</dt>
        <dd>{{ featured.plants | join: ", " }}</dd>
      </div>
    </dl>
    <span class="pf-link">Explore this forest</span>
  </div>
</article>

<section class="pf-section">
  <div class="pf-section__heading">
    <p class="pf-kicker">Other Sites</p>
    <h2>More places to grow</h2>
  </div>

  {% if sorted_forests.size > 1 %}
  <div class="pf-card-grid">
    {% for forest in sorted_forests offset:1 %}
    {% assign forest_image = site.static_files | where: "path", forest.thumbnail | first %}
    <article class="pf-card pf-forest-card">
      {% if forest_image %}
      <img class="pf-forest-card__image" src="{{ forest.thumbnail | relative_url }}" alt="{{ forest.thumbnail_alt | default: forest.title | escape }}">
      {% endif %}
      <div>
        <p class="pf-meta">{{ forest.age }} {% if forest.age == 1 %}year{% else %}years{% endif %}</p>
        <h3><a href="{{ forest.url | relative_url }}">{{ forest.title }}</a></h3>
        <p>{{ forest.address }}</p>
        <a class="pf-link" href="{{ forest.url | relative_url }}">Explore this forest</a>
      </div>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <div class="pf-coming-soon">
    <p class="pf-kicker">Coming Soon</p>
    <h3>More forest sites are taking root.</h3>
    <p>New partner sites will appear here as they grow.</p>
  </div>
  {% endif %}
</section>
{% else %}
<div class="pf-coming-soon">
  <p class="pf-kicker">Coming Soon</p>
  <h2>Our first forest profile is taking root.</h2>
</div>
{% endif %}
