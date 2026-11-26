# Zen Bridge website (Jekyll)

This folder is the whole website. Pages are written in Markdown, and Jekyll turns them into HTML. GitHub builds and publishes the site automatically when changes reach the `main` branch.

## Editing with Pages CMS (recommended)

[Pages CMS](https://pagescms.org) gives volunteers web forms and a visual text editor instead of raw files. Sign in at https://app.pagescms.org with a GitHub account that has write access to this repository, pick the repository and branch, and you'll see:

- **Pages**: the text of each page.
- **Upcoming events**: the list on the Activities page.
- **Board members**: the list on the Board of Directors page.
- **Menu**: the main navigation.
- **Site settings**: email, Zoom link, donate link and addresses, used across the site.
- **Media**: images in `assets/images/`.

Each save is a commit, and GitHub rebuilds the site within a couple of minutes. The setup lives in `.pages.yml` at the top of the repository.

Pieces that need layout (the donate button and QR code, the map, the board and event lists) are built into the page layouts, so page text stays plain and the visual editor can't break them.

## Where things are

| To change… | Edit |
| --- | --- |
| A page's text | The matching `.md` file in this folder, e.g. `teachers.md` |
| Upcoming events (Activities page) | `_data/events.yml` |
| Board members | `_data/board.yml` |
| Menu items | `_data/navigation.yml` |
| Email, Zoom link, addresses, donate link | `_data/contact.yml` |
| Site title and description | `_config.yml` |
| Colours, fonts, spacing | The variables at the top of `assets/css/main.css` |
| Header, menu, footer markup | `_includes/site-header.html`, `_includes/site-footer.html` |
| The page frame, and per-page extras (home callout, giving, contact, board, activities) | `_layouts/` |
| Images | `assets/images/` |

Each page starts with a short block between `---` lines (the "front matter"). `title` is the page's name in the browser tab, `heading` overrides the large heading at the top of the page, `lead` is an optional introduction under it, and `permalink` is its web address. The permalinks keep the old Weebly addresses (`/activities1.html` etc.) so existing links and search results keep working.

## Writing content

- Use `##` for section headings and `###` for sub-headings. The page title is already the top heading, so don't add another.
- Every image needs alt text describing what it shows, for people using screen readers.
- Write link text that makes sense on its own ("Zen Bridge Zoom link", not "click here").
- Keep page text to plain Markdown (headings, paragraphs, lists, links, bold, images). Anything that needs special layout belongs in a layout, so the visual editor can't mangle it.

## Editing on GitHub

Open a file and click the pencil icon. When you commit, GitHub rebuilds the site.

## Previewing on your computer

Requires Ruby 3.x.

```sh
cd jekyll
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.
