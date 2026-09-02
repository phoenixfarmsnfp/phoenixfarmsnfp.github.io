---
title: "Phoenix Farms"
permalink: /
layout: single
author_profile: false
sections:
  - template: announcement
    aria_label: "Home page announcement"
    items:
      - text: "Stop by and grab some fruit!"
        button_label: "Sign up"
        use_tally: false
        enabled: false
  - template: home_hero
    kicker: "Phoenix Farms Not-For-Profit"
    heading: "We are a not-for-profit organization focused on establishing food forests in the Woodlawn, Hyde Park, and Washington Park areas."
    image: "/assets/images/donate-image.jpg"
    image_alt: "Ripening tomatoes and green leaves"
    actions:
      - label: "Join the Community"
        use_tally: true
      - label: "Our Forest"
        url: "/our-forest/"
  - template: quote
    kicker: "Food forests"
    heading: "Food forests are a sustainable and empowering way to give back to the communities around us."
  - template: home_gateway
    kicker: "Explore Phoenix Farms"
    heading: "Grow with us."
    cards:
      - kicker: "Our Forest"
        heading: "First Presbyterian Church Forest"
        text: "Visit our food forest!"
        image: "/assets/images/forest_images/first-presbyterian-church-forest.jpg"
        image_alt: "First Presbyterian Church Forest"
        link_label: "Explore the forest"
        url: "/our-forest/"
        aria_label: "Visit Our Forest"
      - kicker: "Learn"
        heading: "Resources"
        text: "Find information, educational materials, and practical resources from Phoenix Farms and our partners."
        link_label: "Browse resources"
        url: "/resources/"
        aria_label: "Visit Learn resources"
        class: "pf-home-card--learn"
      - kicker: "Get Involved"
        heading: "New dates coming soon."
        text: "Workdays, gatherings, and community invitations will appear here when they are announced."
        link_label: "Get involved"
        url: "/events/"
        aria_label: "Visit Get Involved"
        class: "pf-home-card--events"
  - template: donate_feature
    kicker: "Support the work"
    heading: "With your donation, you can help provide Phoenix Farms fresh crops and resources to people throughout the Hyde Park area."
    image: "/assets/images/tomat_cover.jpg"
    image_alt: "Tomatoes growing at Phoenix Farms"
    actions:
      - use_donation: true
---

{% include pf-render-sections.html sections=page.sections %}
