---
title: "Donate"
permalink: /donate/
layout: single
author_profile: false
sections:
  - template: donate_hero
    kicker: "Donations"
    heading: "With your donation, you can help provide Phoenix Farms fresh crops and resources to people throughout the Hyde Park area."
    text: "Your support helps Phoenix Farms NFP establish food forests and sustain community-centered growing spaces."
    image: "/assets/images/donate-image.jpg"
    image_alt: "Ripening tomatoes growing among green leaves"
    action:
      use_donation: true
  - template: card_grid
    kicker: "Ways to give"
    heading: "Help the Food Forest keep growing."
    cards:
      - heading: "Fresh crops"
        text: "Support the plants, soil, tools, and materials that help make produce available to the surrounding community."
      - heading: "Community resources"
        text: "Help Phoenix Farms maintain welcoming, educational, and useful growing spaces in Hyde Park and nearby neighborhoods."
      - heading: "Seasonal projects"
        text: "Contribute to planting days, maintenance, composting, signage, and community events throughout the year."
---

{% include pf-render-sections.html sections=page.sections %}
