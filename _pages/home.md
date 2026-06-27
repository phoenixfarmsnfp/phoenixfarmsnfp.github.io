---
title: "Phoenix Farms"
permalink: /
layout: single
author_profile: false
announcements:
  - text: "Sign up for our Spring Workday."
    button_label: "Sign up"
    url: "/join/"
    enabled: true
---

<section class="pf-hero pf-hero--home">
  <div class="pf-hero__media">
    <img src="{{ site.logo | relative_url }}" alt="Phoenix Farms NFP logo">
  </div>
  <div class="pf-hero__content">
    <p class="pf-kicker">Phoenix Farms Non-For-Profit</p>
    <h1>We are a non-for-profit organization focused on establishing food forests in the Woodlawn, Hyde Park, and Washington Park areas.</h1>
    <div class="pf-actions">
      <a class="btn btn--primary" href="https://tally.so/r/{{ site.footer.newsletter.tally_form_id }}" data-tally-open="{{ site.footer.newsletter.tally_form_id }}" data-tally-layout="{{ site.footer.newsletter.tally_layout }}" data-tally-width="{{ site.footer.newsletter.tally_width }}" data-tally-emoji-text="{{ site.footer.newsletter.tally_emoji }}" data-tally-emoji-animation="{{ site.footer.newsletter.tally_emoji_animation }}">Join the Community</a>
    </div>
  </div>
</section>

<section class="pf-section pf-section--quote">
  <div>
    <p class="pf-kicker">Food forests</p>
    <h2>Food forests are a sustainable and empowering way to give back to the communities around us.</h2>
  </div>
</section>

{% assign sorted_forests = site.forests | sort: "age" | reverse %}
{% assign featured_forest = sorted_forests | first %}
{% assign featured_forest_image = site.static_files | where: "path", featured_forest.thumbnail | first %}
{% assign sorted_events = site.events | sort: "date" | reverse %}
{% assign today_key = site.time | date: "%Y%m%d" | plus: 0 %}
{% assign upcoming_event = nil %}
{% for event in sorted_events %}
  {% assign event_key = event.date | date: "%Y%m%d" | plus: 0 %}
  {% if event_key >= today_key %}
    {% assign upcoming_event = event %}
    {% break %}
  {% endif %}
{% endfor %}

<section class="pf-home-gateway" aria-labelledby="home-explore-heading">
  <div class="pf-home-gateway__inner">
    <div class="pf-section__heading">
      <p class="pf-kicker">Explore Phoenix Farms</p>
      <h2 id="home-explore-heading">Grow with us.</h2>
    </div>
    <div class="pf-home-gateway__grid">
      <article class="pf-home-card">
        <a class="pf-home-card__link" href="{{ '/our-forest/' | relative_url }}" aria-label="Visit Our Forest"></a>
        {% if featured_forest_image %}
        <div class="pf-home-card__media">
          <img src="{{ featured_forest.thumbnail | relative_url }}" alt="{{ featured_forest.thumbnail_alt | default: featured_forest.title | escape }}">
        </div>
        {% endif %}
        <div class="pf-home-card__body">
          <p class="pf-kicker">Our Forest</p>
          {% if featured_forest %}
          <h3>{{ featured_forest.title }}</h3>
          <p>{{ featured_forest.age }} {% if featured_forest.age == 1 %}year{% else %}years{% endif %} of community-rooted growth.</p>
          {% else %}
          <h3>Our forest sites</h3>
          <p>Meet the food forests taking root with Phoenix Farms.</p>
          {% endif %}
          <span class="pf-link">Explore the forest</span>
        </div>
      </article>

      <article class="pf-home-card pf-home-card--learn">
        <a class="pf-home-card__link" href="{{ '/resources/' | relative_url }}" aria-label="Visit Learn resources"></a>
        <div class="pf-home-card__body">
          <p class="pf-kicker">Learn</p>
          <h3>Resources for growing and sharing.</h3>
          <p>Find information, educational materials, and practical resources from Phoenix Farms and our partners.</p>
          <span class="pf-link">Browse resources</span>
        </div>
      </article>

      <article class="pf-home-card pf-home-card--events">
        <a class="pf-home-card__link" href="{{ '/events/' | relative_url }}" aria-label="Visit Events"></a>
        <div class="pf-home-card__body">
          <p class="pf-kicker">Events</p>
          {% if upcoming_event %}
          <p class="pf-home-card__date">{{ upcoming_event.date | date: "%B %-d, %Y" }}</p>
          <h3>{{ upcoming_event.title }}</h3>
          <p>{{ upcoming_event.description }}</p>
          {% else %}
          <h3>New dates coming soon.</h3>
          <p>Workdays, gatherings, and community invitations will appear here when they are announced.</p>
          {% endif %}
          <span class="pf-link">View events</span>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="pf-section pf-donate-feature">
  <div>
    <p class="pf-kicker">Support the work</p>
    <h2>With your donation, you can help provide Phoenix Farms fresh crops and resources to people throughout the Hyde Park area.</h2>
    <div class="pf-actions">
      <a class="btn btn--primary" href="/donate/">Donate Here</a>
    </div>
  </div>
  <div class="pf-feature-grid">
    <img class="pf-donation-image" src="{{ site.donation.image | relative_url }}" alt="{{ site.donation.image_alt }}">
  </div>
</section>
