---
title: "About Phoenix Farms"
permalink: /about/
layout: single
author_profile: false
---

<section class="pf-page-intro">
  <p class="pf-kicker">About</p>
  <h1>We are a non-for-profit organization created by the Phoenix Farms student organization at the University of Chicago.</h1>
  <p>Our goal is to establish food forests around the Woodlawn, Hyde Park, and Washington Park areas to establish sustainable food sources within these communities.</p>
  <a class="btn btn--primary" href="https://tally.so/r/{{ site.footer.newsletter.tally_form_id }}" data-tally-open="{{ site.footer.newsletter.tally_form_id }}" data-tally-layout="{{ site.footer.newsletter.tally_layout }}" data-tally-width="{{ site.footer.newsletter.tally_width }}" data-tally-emoji-text="{{ site.footer.newsletter.tally_emoji }}" data-tally-emoji-animation="{{ site.footer.newsletter.tally_emoji_animation }}">Join the Community</a>
</section>

<section class="pf-section pf-visit-strip">
  <div>
    <p class="pf-kicker">Hours & Location</p>
    <h2>{{ site.contact.address }}</h2>
    <p>{{ site.contact.location_note }} {{ site.contact.hours }}</p>
  </div>
  <a class="btn btn--primary" href="mailto:{{ site.contact.email }}">{{ site.contact.email }}</a>
</section>

<section class="pf-section">
  <div class="pf-section__heading">
    <p class="pf-kicker">Community</p>
    <h2>Board members and contributors</h2>
  </div>
  <div class="pf-people-grid">
    {% for person in site.data.people %}
    <article class="pf-person">
      <h3>{{ person.name }}</h3>
      {% if person.role %}<p class="pf-person__role">{{ person.role }}</p>{% endif %}
      {% for paragraph in person.bio %}<p>{{ paragraph }}</p>{% endfor %}
    </article>
    {% endfor %}
  </div>
</section>

<section class="pf-section">
  <div class="pf-section__heading">
    <p class="pf-kicker">Partners</p>
    <h2>Our Partners</h2>
  </div>
  <div class="pf-card-grid">
    {% for partner in site.data.partners %}
    <article class="pf-card">
      <h3>{{ partner.name }}</h3>
      <p>{{ partner.description }}</p>
      {% if partner.address %}<p>{{ partner.address }}</p>{% endif %}
      {% if partner.email %}<p>Email: <a href="mailto:{{ partner.email }}">{{ partner.email }}</a></p>{% endif %}
      {% if partner.url %}<p><a class="pf-link" href="{{ partner.url }}">Visit website</a></p>{% endif %}
    </article>
    {% endfor %}
  </div>
</section>

<section class="pf-section pf-cta-band">
  <div>
    <p class="pf-kicker">Support the work</p>
    <h2>We aim to make fresh produce accessible to all families in our community.</h2>
  </div>
  <a class="btn btn--primary" href="/donate/">Donate Here</a>
</section>
