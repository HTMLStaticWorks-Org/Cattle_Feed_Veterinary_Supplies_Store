# FarmCare — Complete Website v10

A responsive static website with two separate homepages and six inner pages.

## Pages
- `index.html` — Home 1
- `home-2.html` — Home 2
- `about.html` — About and year-based journey
- `services.html` — Services, selectable support steps and continuous five-photo rail
- `products.html` — Product categories and farm supply information
- `livestock-care.html` — Livestock care information and local farm photographs
- `contact.html` — Contact details, enquiry form and map
- `faq.html` — Frequently asked questions

## v10.1 updates
- Added a related photo to the Services support feature and the Livestock care banner and care-advice feature.
- Services continuous image rail now contains five distinct photographs per pass, with a duplicate sequence only to create a seamless, gap-free loop.
- Livestock care hero, gallery, banner, step images and routine image now use bundled local assets.
- Replaced remote Pexels image requests on all eight pages and the Home 2 interactive slider with bundled local WebP files. The website's photographs therefore do not depend on an external image CDN.
- Centered section headings, editorial intros, feature copy and CTA content. Removed half-empty left-column feature layouts by adding their relevant images or centering the text block.
- Logo retains its dimensional emblem and displays the name `FarmCare` only. Removed the dot and subtitle.
- Added responsive layouts for mobile and tablet widths; image feature bands stack on narrow screens.

## Run locally
1. Extract the ZIP.
2. Open `FarmCare_Website/index.html` in a modern browser.
3. Use the navigation to open Home 2 and the inner pages.

All photographs are bundled in `assets/` and load locally. An internet connection is still needed for Google Fonts and the embedded OpenStreetMap map. The site itself is static HTML/CSS/JavaScript.

## Demo content
The business address, phone number, email, roadmap dates and social links are sample placeholders. Replace them with verified business information before publishing. The contact form is front-end only and needs an email service or backend to deliver enquiries.


## Version 11 updates
- Services support areas are now a balanced 2-by-2 grid of four photographic cards.
- The fourth product category now has its own photograph.
- Product and livestock-care text-led sections now use photographic backgrounds with readable overlays.
- Removed the extra near-end enquiry buttons from Services and Products so each page has one prominent final CTA.
- Added responsive single-column layouts for the service cards on small screens.

Open `index.html` to launch the site locally. Local image assets are stored in `assets/`.


## V12 image correction
- Every non-home page now has a distinct, high-resolution photographic H1 hero loaded as a real `<img>` layer (not only a CSS background variable).
- Six inner-page hero photos are different source images and request 2560px-wide Unsplash CDN renditions.
- Repeated card-image pairs identified in V11 have been assigned different photo sources.
- Each remote image has a local fallback if the CDN is unavailable.
- See `IMAGE_CREDITS_V12.md` for source links.


## Version 13 visual refinements
- Home 1 support cards now include four relevant photographs instead of text-only cards.
- Home 2's "Less searching" feature heading, paragraph, checklist and action are centered; the checklist becomes a responsive two-column group.
- Added a new four-step photographic process-card section to Home 2, inspired by the supplied step-process reference.
- The Services continuous photo rail now contains five distinct local photographs in its visible sequence and no remote image dependency.
- Product and livestock photo-backed sections force high-contrast white headings and supporting text over their dark overlays.
- All added images are local files under `assets/`.


## Version 14 update
- Home 1: added a connected four-image farm capabilities timeline as the third main section.
- Home 2: added a five-panel expandable photographic discipline section as the third section, with four compact panels and one featured wide panel.
- Added eight newly created, subject-specific farm photographs (four for Home 1 and five unique photographs for Home 2); no photograph is reused between the two new sections.
- Centred the Home 2 “Less searching. More time for the work.” feature block.
- Replaced the half-moon theme glyph with an accessible sun/moon SVG toggle.
- Removed decorative arrow glyphs from CTA and navigation button labels; directional slider controls remain.
- Added responsive layouts: four-column capability path on desktop, two columns on tablet/mobile; expandable discipline panels on desktop/tablet and two-column photo cards on mobile.
