# Content Editing Guide

Most reusable page wording now lives in `_data/blocks.yml`. Page files in `_pages/` mostly choose which blocks appear, and in what order.

## Where To Edit Copy

- Shared page blocks: `_data/blocks.yml`
- Home page order: `_pages/home.md`
- Donate page order: `_pages/donate.md`
- About page order: `_pages/about.md`
- Resources page order: `_pages/resources.md`
- Get Involved page order: `_pages/events.md`
- Forest index page order: `_pages/our-forest.md`
- Food-forest Model page order: `_pages/food-forest-model.md`
- Projects page order: `_pages/projects.md`
- Blog landing page order: `_pages/blog.md`

Edit block values like `kicker:`, `heading:`, `text:`, `cards:`, `image:`, `image_alt:`, and `action:` in `_data/blocks.yml`. These are the intuitive content areas for headings, body text, image paths, alt text, and button labels.

Edit the `sections:` list in a page file when you want to reorder, add, or remove blocks:

```yml
sections:
  - ref: home_hero
  - ref: food_forest_quote
  - ref: home_gateway
  - ref: donate_feature
```

The blog landing page uses the same `sections:` list, but its post filtering and listing logic lives in `_includes/pf-blog-index.html`.

The old Join page has been removed. Signup/community form access should use Tally buttons through `use_tally: true`.

## Large Block Files

Keep `_data/blocks.yml` while the site is small: one file is easy to search and avoids extra lookup rules. If it becomes hard to scan, split blocks by page or domain into files such as `_data/blocks/home.yml` and `_data/blocks/blog.yml`, then update the renderer to resolve grouped references. Avoid YAML inheritance or deep merge rules unless repeated content becomes painful enough to justify the added mental overhead.

## Where The Shared HTML Lives

Reusable section markup lives in `_includes/`.

- `_includes/pf-render-sections.html`: loops through a page's `sections:` list
- `_includes/pf-section.html`: chooses the renderer for each block `type`
- `_includes/pf-page-intro.html`: standard page intro sections
- `_includes/pf-home-hero.html`: home page hero image, headline, and buttons
- `_includes/pf-home-gateway.html`: home page "Grow with us" card gateway
- `_includes/pf-donate-feature.html`: home page donation feature with image
- `_includes/pf-donate-hero.html`: donate page hero
- `_includes/pf-card-grid.html`: repeated three-card sections
- `_includes/pf-cta-band.html`: repeated call-to-action bands
- `_includes/pf-events-list.html`: event index list
- `_includes/pf-forest-index.html`: forest index list
- `_includes/pf-blog-index.html`: blog filters, featured post, and post grid
- `_includes/pf-button.html`: shared button rendering, including Tally and contact email buttons

Change these include files when you want to change layout or markup across pages. Change `_data/blocks.yml` when you only want to change copy, image paths, or button labels.

## Shared Data

People and partner cards still come from data files:

- Board and contributor bios: `_data/people.yml`
- Partner cards: `_data/partners.yml`

Site-wide contact and donation defaults live in `_config.yml`.
