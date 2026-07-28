# Content Editing Guide

Most page-specific wording now lives in page front matter at the top of each file in `_pages/`.

## Where To Edit Copy

- Home page: `_pages/home.md`
- Donate page: `_pages/donate.md`
- About page: `_pages/about.md`
- Join page: `_pages/join.md`
- Resources page: `_pages/resources.md`
- Events page: `_pages/events.md`
- Blog landing page intro: `_pages/blog.md`

Edit values under blocks like `intro:`, `hero:`, `cta:`, `cards:`, and `donate_feature:`. These are the intuitive content areas for headings, body text, image paths, alt text, and button labels.

## Where The Shared HTML Lives

Reusable section markup lives in `_includes/`.

- `_includes/pf-page-intro.html`: standard page intro sections
- `_includes/pf-home-hero.html`: home page hero image, headline, and buttons
- `_includes/pf-home-gateway.html`: home page "Grow with us" card gateway
- `_includes/pf-donate-feature.html`: home page donation feature with image
- `_includes/pf-donate-hero.html`: donate page hero
- `_includes/pf-card-grid.html`: repeated three-card sections
- `_includes/pf-cta-band.html`: repeated call-to-action bands
- `_includes/pf-button.html`: shared button rendering, including Tally and contact email buttons

Change these include files when you want to change layout or markup across pages. Change `_pages/*.md` front matter when you only want to change page copy, image paths, or button labels.

## Shared Data

People and partner cards still come from data files:

- Board and contributor bios: `_data/people.yml`
- Partner cards: `_data/partners.yml`

Site-wide contact and donation defaults live in `_config.yml`.
