# ECO Consulting Ltd. website

Next.js 14 (App Router) with Tailwind CSS v4. Three pages: Home (`/`), Projects (`/projects`) and Contact (`/contact`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

For a production build: `npm run build`, then `npm start`.

## Where things are

| To change                                                | Edit                                                                        |
| -------------------------------------------------------- | --------------------------------------------------------------------------- |
| Wording, services, projects, contact details             | `src/lib/content.ts`                                                        |
| Colours and typefaces                                    | the `@theme` block at the top of `src/app/globals.css`                      |
| Header, footer, contact band, photo tag, service symbols | `src/components/`                                                           |
| Page layouts                                             | `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/contact/page.tsx` |
| Page titles and search descriptions                      | `metadata` in `src/app/layout.js` and in each page file                     |
| Photos and logo                                          | `public/`                                                                   |

### Add a featured project

1. Put the photo in `public/`.
2. Import it at the top of `src/lib/content.ts`.
3. Add an entry to `featuredProjects` with the client, site, title, scope, a one-sentence `alt` description
   of the photo, and `orientation` (`"landscape"` or `"portrait"`).

`focus` controls which part of the photo stays visible when it is cropped. It is a CSS `object-position`
value: `"50% 50%"` is the centre, `"0% 50%"` keeps the left edge, `"50% 0%"` keeps the top.

The first entry in `featuredProjects` is the home page hero photo.

### Add a past project

Add a row to `siteProjects` (work at one client site) or `multiSiteWork` (work across several sites)
in `src/lib/content.ts`. The Projects page lists them in the order they appear.

## Assets

- `public/eco-logo.png` and `public/eco-logo-white.png` are the supplied `eco.jpg` logo with the white
  background removed, for use on light and dark backgrounds. `eco.jpg` is unchanged.
- `src/app/icon.png` and `src/app/apple-icon.png` are the browser-tab and home-screen icons, made from the oval "ECO-" mark in the logo.
- `public/bolt.png`, `public/email.png` and `public/telephone.png` are no longer used by the pages (the small icons are now drawn
  in `src/components/Icons.tsx` so they stay sharp and can change colour). They are kept so nothing you
  supplied is missing; delete them if you prefer.
- Fonts are Fira Sans and Fira Sans Condensed (SIL Open Font License 1.1, see `src/app/fonts/LICENSE.txt`).
  They are served from the site itself, so no font request goes to a third party.
