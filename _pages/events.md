---
title: "Events"
permalink: /events/
layout: single
author_profile: false
intro:
  kicker: "Events"
  heading: "Gatherings, workdays, and community invitations."
volunteer_cta:
  kicker: "Become A Volunteer"
  heading: "Help us make food accessible and sustainable to community members in the South Side area."
  action:
    label: "Join the Community"
    use_tally: true
donate_cta:
  kicker: "Support the work"
  heading: "With your donation, you can help provide Phoenix Farms fresh crops and resources to people throughout the Hyde Park area."
  action:
    label: "Donate Here"
    url: "/donate/"
    class: "btn"
---

{% include pf-page-intro.html intro=page.intro %}

{% assign sorted_events = site.events | sort: "date" | reverse %}
{% assign today_key = site.time | date: "%Y%m%d" | plus: 0 %}
{% assign upcoming_count = 0 %}
{% assign prior_count = 0 %}

<section class="pf-events-list" aria-label="Upcoming events">
  {% for event in sorted_events %}
    {% assign event_key = event.date | date: "%Y%m%d" | plus: 0 %}
    {% if event_key >= today_key %}
      {% assign upcoming_count = upcoming_count | plus: 1 %}
  <article class="pf-event">
    <div class="pf-event__date">
      <span>{{ event.date | date: "%b" }}</span>
      <strong>{{ event.date | date: "%-d" }}</strong>
    </div>
    <div class="pf-event__body">
      <p class="pf-meta">{{ event.date | date: "%A, %B %-d, %Y" }}{% if event.time %} &middot; {{ event.time }}{% endif %}</p>
      <h2><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h2>
      {% if event.description %}<p>{{ event.description }}</p>{% endif %}
      <a class="pf-link" href="{{ event.url | relative_url }}">Event details</a>
    </div>
  </article>
    {% endif %}
  {% endfor %}

  {% if upcoming_count == 0 %}
  <div class="pf-coming-soon">
    <p class="pf-kicker">Events</p>
    <h2>Come back soon!</h2>
    <p>New workdays, gatherings, and community invitations will appear here when they are announced.</p>
  </div>
  {% endif %}
</section>

{% for event in sorted_events %}
  {% assign event_key = event.date | date: "%Y%m%d" | plus: 0 %}
  {% if event_key < today_key %}
    {% assign prior_count = prior_count | plus: 1 %}
  {% endif %}
{% endfor %}

{% if prior_count > 0 %}
<section class="pf-section" aria-labelledby="prior-events-heading">
  <div class="pf-section__heading">
    <p class="pf-kicker">Past Gatherings</p>
    <h2 id="prior-events-heading">Prior events</h2>
  </div>
  <div class="pf-events-list">
    {% for event in sorted_events %}
      {% assign event_key = event.date | date: "%Y%m%d" | plus: 0 %}
      {% if event_key < today_key %}
    <article class="pf-event pf-event--past">
      <div class="pf-event__date">
        <span>{{ event.date | date: "%b" }}</span>
        <strong>{{ event.date | date: "%-d" }}</strong>
      </div>
      <div class="pf-event__body">
        <p class="pf-meta">{{ event.date | date: "%A, %B %-d, %Y" }}{% if event.time %} &middot; {{ event.time }}{% endif %}</p>
        <h2><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h2>
        {% if event.description %}<p>{{ event.description }}</p>{% endif %}
        <a class="pf-link" href="{{ event.url | relative_url }}">Event details</a>
      </div>
    </article>
      {% endif %}
    {% endfor %}
  </div>
</section>
{% endif %}

{% include pf-cta-band.html cta=page.volunteer_cta %}
{% include pf-cta-band.html cta=page.donate_cta class="pf-cta-band--quiet" %}
