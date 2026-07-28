---
title: "Donate"
permalink: /donate/
layout: single
author_profile: false
hero:
  kicker: "Donations"
  heading: "With your donation, you can help provide Phoenix Farms fresh crops and resources to people throughout the Hyde Park area."
  text: "Your support helps Phoenix Farms NFP establish food forests and sustain community-centered growing spaces."
  image: "/assets/images/donate-image.jpg"
  image_alt: "Ripening tomatoes growing among green leaves"
  action:
    label: "Donate Here"
    mailto_site_contact: true
    subject: "Donation inquiry"
ways_to_give:
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

{% include pf-donate-hero.html hero=page.hero %}
{% include pf-card-grid.html section=page.ways_to_give %}
