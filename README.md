# Zen Bridge static site demo

A test of moving [zenbridge.org](https://www.zenbridge.org) off Weebly onto a static site hosted on GitHub Pages.

- [`jekyll/`](jekyll/) is the rebuilt site in Jekyll, published at the root of the GitHub Pages site. It keeps the old page addresses, uses simple semantic markup and a mobile-friendly layout, and aims for WCAG 2.2 AA. See [`jekyll/README.md`](jekyll/README.md) for how to edit and preview it.
- [`.pages.yml`](.pages.yml) sets up [Pages CMS](https://pagescms.org), so volunteers can edit pages, events, board members, the menu and contact details through web forms.
- [`weebly/`](weebly/) is a snapshot of the old Weebly site, saved on 2026-11-26 and published at `/weebly/` for comparison.

`.github/workflows/pages.yml` builds and publishes both on every push to `main`.
