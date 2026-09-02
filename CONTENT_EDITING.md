# Content Editing Guide

Page sections now use a small hierarchy:

1. `_data/blocks.yml` lists reusable section templates.
2. Page files in `_pages/` choose templates and fill in page-specific content.
3. `_data/blocks.yml` also keeps a short `presets:` list for reusable prefilled blocks.

## Where To Edit Copy

Most page wording now lives directly in the page's `sections:` list:

- Home page: `_pages/home.md`
- Donate page: `_pages/donate.md`
- About page: `_pages/about.md`
- Resources page: `_pages/resources.md`
- Get Involved page: `_pages/events.md`
- Forest index page: `_pages/our-forest.md`
- Food-forest Model page: `_pages/food-forest-model.md`
- Projects page: `_pages/projects.md`
- Blog landing page: `_pages/blog.md`

Edit values like `kicker:`, `heading:`, `text:`, `cards:`, `image:`, `image_alt:`, `actions:`, and `action:` in the relevant page file.

## Templates

Use `template:` when a page should use a known section shape and provide its own content:

```yml
sections:
  - template: page_intro
    kicker: "Resources"
    heading: "FAQ"
    text: "Common questions about Phoenix Farms and food forests"
```

Template names are listed under `templates:` in `_data/blocks.yml`. The empty fields there document the editable options for each section shape.

## Presets

Use `ref:` when a page should reuse a prefilled block from `_data/blocks.yml`:

```yml
sections:
  - ref: donate_cta
```

You can override top-level fields from a preset on one page:

```yml
sections:
  - ref: donate_cta
    heading: "Help us plant, maintain, and share fresh food with the neighborhood."
```

Overrides are intentionally shallow. To change part of a nested object such as `action:`, replace the whole nested object in the page:

```yml
sections:
  - ref: donate_cta
    action:
      label: "Support Phoenix Farms"
      use_donation: true
```

## Section Order

Edit the `sections:` list in a page file when you want to reorder, add, or remove sections:

```yml
sections:
  - template: page_intro
    heading: "Projects"
  - ref: generic_coming_soon
```

The blog landing page uses the same `sections:` list, but its post filtering and listing logic lives in `_includes/pf-blog-index.html`.

The old Join page has been removed. Signup/community form access should use Tally buttons through `use_tally: true`.

## Where The Shared HTML Lives

Reusable section markup lives in `_includes/`.

- `_includes/pf-render-sections.html`: resolves `template:` and `ref:` entries from a page's `sections:` list
- `_includes/pf-section.html`: chooses the renderer for each section `type`
- `_includes/pf-page-intro.html`: standard page intro sections
- `_includes/pf-home-hero.html`: home page hero image, headline, and buttons
- `_includes/pf-home-gateway.html`: home page "Grow with us" card gateway
- `_includes/pf-donate-feature.html`: home page donation feature with image
- `_includes/pf-donate-hero.html`: donate page hero
- `_includes/pf-card-grid.html`: repeated card sections
- `_includes/pf-cta-band.html`: repeated call-to-action bands
- `_includes/pf-events-list.html`: event index list
- `_includes/pf-forest-index.html`: forest index list
- `_includes/pf-blog-index.html`: blog filters, featured post, and post grid
- `_includes/pf-button.html`: shared button rendering, including Tally and contact email buttons

Change these include files when you want to change layout or markup across pages. Change page front matter or `_data/blocks.yml` presets when you only want to change copy, image paths, or button labels.

## Shared Data

People and partner cards still come from data files:

- Board and contributor bios: `_data/people.yml`
- Partner cards: `_data/partners.yml`

Site-wide contact and donation defaults live in `_config.yml`.
