# Zen Bridge website (Jekyll)

This folder is the whole website. Pages are written in Markdown, and Jekyll turns them into HTML. GitHub builds and publishes the site automatically when changes reach the `main` branch.

## How a page is built

Every page is a list of **sections**, stacked top to bottom. A section can have any of these, all optional:

- **Heading**
- **Text**, written in the visual editor
- **Photo**, with a description for screen readers, an optional caption, and where it goes: beside the text (right or left), above it, or below it. Beside-the-text photos stack under or over the text on phones.
- **Built-in content**, kept up to date elsewhere: the upcoming events list, the board members list, the donate button and QR code, or the addresses and map link
- **Style**: normal, centered, or highlighted (the purple box on the home page)

Above the sections, each page has a **page name** (used in the browser tab), an optional **heading** if the big title should say something else, and an optional one-sentence **introduction**.

That's the whole system. Fonts, colours, spacing and the photo frames are handled by the stylesheet, so editors never need to format anything by hand.

## Editing with Pages CMS (recommended)

[Pages CMS](https://pagescms.org) gives volunteers web forms and a visual text editor instead of raw files. Sign in at https://app.pagescms.org with a GitHub account that has write access to this repository, pick the repository and the `main` branch, and you'll see:

- **Pages**: each page's sections.
- **Upcoming events**: the list on the Activities page.
- **Board members**: the list on the Board of Directors page.
- **Menu**: the main navigation.
- **Site settings**: email, Zoom link, donate link and addresses, used across the site.
- **Media**: images in `assets/images/`.

Each save is a commit, and GitHub rebuilds the site within a couple of minutes. The setup lives in `.pages.yml` at the top of the repository.

## Where things are

| To change… | Edit |
| --- | --- |
| A page's content | The page's file in this folder (e.g. `teachers.md`); its sections are in the block between the `---` lines |
| Upcoming events | `_data/events.yml` |
| Board members | `_data/board.yml` |
| Menu items | `_data/navigation.yml` |
| Email, Zoom link, addresses, donate link | `_data/contact.yml` |
| Site title and description | `_config.yml` |
| Colours, fonts, spacing | The variables at the top of `assets/css/main.css` |
| How a section is drawn | `_includes/section.html` |
| Built-in content | `_includes/feature-*.html` |
| Header, menu, footer | `_includes/site-header.html`, `_includes/site-footer.html` |
| The page frame and home banner | `_layouts/default.html` |
| Images | `assets/images/` |
| Fonts (Lato and Amaranth, self-hosted) | `assets/fonts/` |

Page addresses keep the old Weebly URLs (`/activities1.html` etc.) through each page's `permalink`, so existing links and search results keep working.

## Writing tips

- In section text, use the editor's heading levels below the section heading (Heading 3), not above it.
- Every photo needs a description for people using screen readers. Leave it empty only for purely decorative images.
- Write link text that makes sense on its own ("Zen Bridge Zoom link", not "click here").
- Everything is self-hosted. Don't paste in embeds or images from other websites; upload images to the media library instead.

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
