---
title: "Living Project Blog"
permalink: /blog/
layout: single
author_profile: false
sections:
  - template: page_intro
    kicker: "Living Project Blog"
    heading: "Updates"
    text: "Planting notes, harvest observations, community events, internship research, and seasonal updates from Phoenix Farms."
  - template: blog_index
    filters:
      kicker: "Find Posts"
      heading: "Filter the blog"
      year_label: "Year"
      year_all_label: "All years"
      tag_label: "Tag"
      tag_all_label: "All tags"
      clear_label: "Clear filters"
      browse_label: "Browse the blog"
      archive_label: "Browse by year"
      tags_label: "Browse by tag"
    featured:
      kicker: "Featured / Most Recent"
      link_label: "Read More"
    archive:
      kicker: "Archive"
      heading: "Older posts"
      link_label: "Read More"
    empty:
      kicker: "No Matches"
      heading: "No posts match those filters."
      text: "Try another year or tag, or clear the filters to see everything."
    no_posts: "No Living Project Blog posts have been added yet."
---

{% include pf-render-sections.html sections=page.sections %}
