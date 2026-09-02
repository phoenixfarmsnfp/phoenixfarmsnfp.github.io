---
title: "Get Involved"
permalink: /events/
layout: single
author_profile: false
sections:
  - template: page_intro
    kicker: "Get Involved"
    heading: "Gatherings, workdays, and community invitations."
  - template: events_list
    empty:
      kicker: "Events"
      heading: "Come back soon!"
      text: "New workdays, gatherings, and community invitations will appear here when they are announced."
    past:
      kicker: "Past Gatherings"
      heading: "Prior events"
  - template: cta_band
    kicker: "Become A Volunteer"
    heading: "Help us make food accessible and sustainable to community members in the South Side area."
    action:
      label: "Join the Community"
      use_tally: true
  - template: toggle_callouts
    class: "pf-toggle-callouts--block"
    kicker: "Partnerships"
    heading: "Work with Phoenix Farms."
    items:
      - heading: "Workshops"
        content: "In progress."
      - heading: "Plots"
        content: "In progress."
  - ref: donate_cta
---

{% include pf-render-sections.html sections=page.sections %}
