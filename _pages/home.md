---
title: "Phoenix Farms"
permalink: /
layout: single
author_profile: false
announcements:
  - text: "Stop by and grab some fruit!"
    button_label: "Sign up"
    use_tally: false
    enabled: true
sections:
  - ref: home_hero
  - ref: food_forest_quote
  - ref: home_gateway
  - ref: donate_feature
---

{% include pf-render-sections.html sections=page.sections %}
