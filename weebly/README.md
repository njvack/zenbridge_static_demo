# Snapshot of the Weebly site

Saved from https://www.zenbridge.org on 2026-11-26 with `wget --page-requisites --convert-links`, for reference while building the Jekyll version.

Changes from what Weebly serves:

- Query strings were stripped from asset filenames (`logo.png?123` became `logo.png`).
- Email addresses, which Weebly hides behind Cloudflare's email protection script, were decoded into plain `mailto:` links, and that script was removed.

The pages still load Weebly's shared CSS and JavaScript from `cdn*.editmysite.com`, so they will only look right while those files exist and you are online. The deploy workflow publishes this folder at `/weebly/`, next to the Jekyll site.
