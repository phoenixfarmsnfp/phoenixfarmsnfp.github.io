---
title: "About Phoenix Farms"
permalink: /about/
layout: single
author_profile: false
sections:
  - template: page_intro
    heading_id: "mission-aims"
    kicker: "About"
    heading: "Mission & Aims"
    text:
      - "We are Phoenix Farms, a small nonprofit organization that maintains a food forest in Woodlawn. We've been operating for a few years now on God's Little Acre, a lot on 64th and Kimbark, in partnership with First Presbyterian Church."
      - "Phoenix Farms seeks to promote access to fresh, sustainably-grown fruits and vegetables for our local community. Our food forest is open to the public and we encourage everyone to pick and eat our produce **completely free and at any time.** Produce not picked by our community is donated to First Presbyterian's Free Food Market. We continue to work to make our space a safe spot where neighbors can stop and learn about food production, native plants, and pollinators."
    actions:
      - label: "Join the Community"
        use_tally: true
  - template: visit_strip
    kicker: "Hours & Location"
    use_site_contact: true
    action:
      mailto_site_contact: true
  - template: people_section
    heading_id: "our-team"
    kicker: "Community"
    heading: "Board members and contributors"
    current_heading: "Current board members"
    former_heading: "Former board members, contributors, and interns"
  - template: partners_section
    heading_id: "our-partners"
    kicker: "Partners"
    heading: "Our Partners"
  - template: cta_band
    kicker: "Support the work"
    heading: "We aim to make fresh produce accessible to all families in our community."
    action:
      use_donation: true
---

{% include pf-render-sections.html sections=page.sections %}
