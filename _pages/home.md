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
hero:
  kicker: "Phoenix Farms Non-For-Profit"
  heading: "We are a not-for-profit organization focused on establishing food forests in the Woodlawn, Hyde Park, and Washington Park areas."
  image: "/assets/images/donate-image.jpg"
  image_alt: "Ripening tomatoes growing among green leaves"
  actions:
    - label: "Join the Community"
      use_tally: true
    - label: "Our Forest"
      url: "/our-forest/"
quote:
  kicker: "Food forests"
  heading: "Food forests are a sustainable and empowering way to give back to the communities around us."
gateway:
  kicker: "Explore Phoenix Farms"
  heading: "Grow with us."
  forest:
    kicker: "Our Forest"
    url: "/our-forest/"
    aria_label: "Visit Our Forest"
    fallback_heading: "Our forest sites"
    fallback_text: "Meet the food forests taking root with Phoenix Farms."
    link_label: "Explore the forest"
  cards:
    - kicker: "Learn"
      heading: "Resources for growing and sharing."
      text: "Find information, educational materials, and practical resources from Phoenix Farms and our partners."
      link_label: "Browse resources"
      url: "/resources/"
      aria_label: "Visit Learn resources"
      class: "pf-home-card--learn"
    - kicker: "Events"
      heading: "New dates coming soon."
      text: "Workdays, gatherings, and community invitations will appear here when they are announced."
      link_label: "View events"
      url: "/events/"
      aria_label: "Visit Events"
      class: "pf-home-card--events"
      dynamic_event: true
donate_feature:
  kicker: "Support the work"
  heading: "With your donation, you can help provide Phoenix Farms fresh crops and resources to people throughout the Hyde Park area."
  image: "/assets/images/tomat_cover.jpg"
  image_alt: "Tomatoes growing at Phoenix Farms"
  actions:
    - label: "Donate Here"
      url: "/donate/"
---

{% include pf-home-hero.html hero=page.hero %}
{% include pf-quote-section.html quote=page.quote %}
{% include pf-home-gateway.html section=page.gateway %}
{% include pf-donate-feature.html feature=page.donate_feature %}
