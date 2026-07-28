---
title: "About Phoenix Farms"
permalink: /about/
layout: single
author_profile: false
intro:
  kicker: "About"
  heading: "We are a not-for-profit organization created by the Phoenix Farms student organization at the University of Chicago."
  text: "Our goal is to establish food forests around the Woodlawn, Hyde Park, and Washington Park areas to establish sustainable food sources within these communities."
  actions:
    - label: "Join the Community"
      use_tally: true
visit:
  kicker: "Hours & Location"
  use_site_contact: true
  action:
    mailto_site_contact: true
people:
  kicker: "Community"
  heading: "Board members and contributors"
  current_heading: "Current board members"
  former_interns_heading: "Former interns"
  former_board_heading: "Former board members and contributors"
partners:
  kicker: "Partners"
  heading: "Our Partners"
cta:
  kicker: "Support the work"
  heading: "We aim to make fresh produce accessible to all families in our community."
  action:
    label: "Donate Here"
    url: "/donate/"
---

{% include pf-page-intro.html intro=page.intro %}
{% include pf-visit-strip.html visit=page.visit %}
{% include pf-people-section.html section=page.people %}
{% include pf-partners-section.html section=page.partners %}
{% include pf-cta-band.html cta=page.cta %}
