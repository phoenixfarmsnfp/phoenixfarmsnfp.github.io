---
title: "Join the Community"
permalink: /join/
layout: single
author_profile: false
intro:
  kicker: "Join the Community"
  heading: "Help us make food accessible and sustainable to community members in the South Side area."
  text: "Phoenix Farms grows through the people who show up, lend a hand, share skills, and care about the work."
  actions:
    - label: "Join Now"
      use_tally: true
get_involved:
  kicker: "Get involved"
  heading: "There are a few natural ways to plug in."
  cards:
    - heading: "Volunteer"
      text: "Join workdays, help with upkeep, and support the day-to-day care that keeps the Food Forest healthy."
    - heading: "Share skills"
      text: "Bring knowledge in gardening, education, community organizing, design, composting, fundraising, or local partnerships."
    - heading: "Partner"
      text: "Connect Phoenix Farms with neighborhood groups, schools, growers, and community food projects."
cta:
  kicker: "Support the work"
  heading: "With your donation, you can help provide Phoenix Farms fresh crops and resources to people throughout the Hyde Park area."
  action:
    label: "Donate Here"
    url: "/donate/"
    class: "btn"
---

{% include pf-page-intro.html intro=page.intro %}
{% include pf-card-grid.html section=page.get_involved %}
{% include pf-cta-band.html cta=page.cta %}
