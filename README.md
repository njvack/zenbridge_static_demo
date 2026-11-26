# Zen Bridge static site demo

A test of moving [zenbridge.org](https://www.zenbridge.org) off Weebly onto a static site hosted on GitHub Pages.

- [`current/`](current/) is a snapshot of the live Weebly site, saved on 2026-11-26, for reference.
- [`jekyll/`](jekyll/) is the rebuilt site in Jekyll: same content and page addresses, with simple semantic markup, a mobile-friendly layout, and WCAG 2.2 AA accessibility in mind. See [`jekyll/README.md`](jekyll/README.md) for how to edit and preview it.

`.github/workflows/pages.yml` builds `jekyll/` and publishes it to GitHub Pages on every push to `main` that touches it. The snapshot is published alongside it at `/current/`.
