# Zen Bridge website (Jekyll)

This folder is the whole website. Pages are written in Markdown, and Jekyll turns them into HTML. GitHub builds and publishes the site automatically when changes reach the `main` branch.

## Where things are

| To change… | Edit |
| --- | --- |
| A page's text | The matching `.md` file in this folder, e.g. `teachers.md` |
| Upcoming events (Activities page) | `_data/events.yml` |
| Board members | `_data/board.yml` |
| Menu items | `_data/navigation.yml` |
| Email, Zoom link, addresses, donate link | `_config.yml` |
| Colours, fonts, spacing | The variables at the top of `assets/css/main.css` |
| Header, menu, footer markup | `_includes/site-header.html`, `_includes/site-footer.html` |
| The page frame (head, hero image) | `_layouts/default.html` |
| Images | `assets/images/` |

Each page starts with a short block between `---` lines (the "front matter"). `title` is the page's name in the browser tab and menu, `heading` overrides the large heading at the top of the page, and `permalink` is its web address. The permalinks keep the old Weebly addresses (`/activities1.html` etc.) so existing links and search results keep working.

## Writing content

- Use `##` for section headings and `###` for sub-headings. The page title is already the `#` heading, so don't add another.
- Every image needs `alt` text describing what it shows, for people using screen readers. If an image is purely decorative, use `alt=""`.
- Write link text that makes sense on its own ("Zen Bridge Zoom link", not "click here").
- Use the existing pieces rather than custom colours or fonts:
  - `<dl class="schedule">` for a list of times and activities (see `index.md`).
  - `<section class="callout" markdown="1">` for a highlighted box.
  - `class="float-right"` or `class="float-left"` on an image to sit it beside text on larger screens.

## Editing in the browser

On GitHub, open a file and click the pencil icon. When you commit, GitHub rebuilds the site within a couple of minutes.

## Previewing on your computer

Requires Ruby 3.x.

```sh
cd jekyll
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
