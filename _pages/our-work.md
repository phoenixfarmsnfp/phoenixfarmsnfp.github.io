---
title: "Our Work"
permalink: /our-work/
layout: single
author_profile: false
sections:
  - template: page_intro
    heading_id: "our-forest"
    kicker: "Our Forest"
    heading: "Food forest(s)"
    text: "The sites Phoenix Farms and our partners are developing together."
  - template: forest_index
    featured_kicker: "Featured Forest"
    featured_link_label: "Explore this forest"
    other_kicker: "Other Sites"
    coming_soon:
      kicker: "Coming Soon"
      text: "New partner sites will appear here as they develop."
    empty:
      kicker: "Coming Soon"
      heading: "More sites are taking shape."
  - template: page_intro
    heading_id: "food-forest-model"
    kicker: "Our Work"
    heading: "Food-forest Model"
    text: "The theory behind the food-forest system."
  - type: resource_embed
    kicker: "Guilds"
    heading: "Permaculture: All About Guilds"
    text: "Here in the midwest, agriculture is often seen through monoculture: acres of corn or fields of soybeans. Food forests offer the opposite: not only are they meant to persist year to year, they also represent a diverse, multi-species approach to agriculture. For now, check out Edible Evanston's wonderful explanation of food forest guilds, embedded below."
    url: "https://edibleevanston.org/content/permaculture-all-about-guilds"
    iframe_title: "Edible Evanston: Permaculture, All About Guilds"
    link_label: "Open Edible Evanston's guilds resource"
  - template: page_intro
    heading_id: "projects"
    kicker: "Our Work"
    heading: "Projects"
    text: "A home for current and upcoming Phoenix Farms projects."
  - ref: generic_coming_soon
---

{% include pf-render-sections.html sections=page.sections %}
