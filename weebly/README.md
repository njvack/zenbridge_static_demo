# Snapshot of the Weebly site

Saved from https://www.zenbridge.org on 2026-11-26 with `wget --page-requisites --convert-links`, for reference while building the Jekyll version.

Changes from what Weebly serves:

- Query strings were stripped from asset filenames (`logo.png?123` became `logo.png`).
- Email addresses, which Weebly hides behind Cloudflare's email protection script, were decoded into plain `mailto:` links, and that script was removed.
- The home page banner's inline style, which `wget` mangled into an invalid URL, points at the local copy again.
- Weebly's shared CSS, fonts, images and JavaScript from `cdn*.editmysite.com` are copied into `vendor/`, so the snapshot loads nothing from third parties.
- Google Analytics, reCAPTCHA, Weebly's own tracker and customer-accounts script were removed.
- The PayPal donate image button became a plain text button (same form), and the Weebly map widget became a link to Google Maps.

The deploy workflow publishes this folder at `/weebly/`, next to the Jekyll site.
