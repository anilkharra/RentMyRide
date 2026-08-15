# RentMyRide — Nashik Darshan & Travels website

A plain HTML/CSS/JS site (no build step, no framework) so it's easy to edit
directly on GitHub and publish for free with GitHub Pages.

## Pages
- `index.html` — homepage
- `nashik-darshan.html` — packages, the full pickup-to-drop-back cycle, food & stay
- `kumbh-mela.html` — Kumbh Mela travel planning
- `fleet-pricing.html` — vehicles and per-km pricing
- `about.html` — about the business
- `contact.html` — enquiry form, phone, WhatsApp, map

Shared styling lives in `assets/css/style.css` and shared behaviour (mobile
menu, WhatsApp links, the enquiry form) lives in `assets/js/main.js`.

## The most important edit: your WhatsApp number
Open `assets/js/main.js` and change the first line:
```js
const WHATSAPP_NUMBER = "919999999999"; // country code + number, no + or spaces
```
This one line powers every WhatsApp button and the enquiry form on every page.

## Editing text
Every page is plain HTML — open any `.html` file (on GitHub, click the pencil/edit
icon, or use any text editor) and change the text between tags. Look for
`<h1>`, `<h2>`, `<p>` and `<li>` — those are headings, paragraphs and list items.
Package cards, fleet cards and attraction cards are repeated blocks (look for
`<div class="card">`) — copy a whole block and edit it to add a new package,
or delete one to remove it.

Also update, on every page, in the `<head>`:
- `<title>` and `<meta name="description">` — what shows up in Google search results
- the phone number in the top bar and footer (`tel:+91...` and the visible number)
- the email address in the footer (`mailto:...`)

## Photos
Real photos are now in place across the site — Nashik ghats, Trimbakeshwar,
Shirdi, Pandavleni caves, Harihar Fort, vineyards, the guide-cum-driver
cycle stops, and Kumbh Mela crowd shots. Swap any of them out any time —
just keep the same filename and folder (see below).

There's also `assets/images/gallery/` — 37 more photos from your batch that
aren't used on the site yet (extra temple, ghat, food and trekking shots).
Handy if you add a gallery page, a new city, or want an alternative to
what's currently showing somewhere.

## Adding your own photos and logo
1. Replace `assets/images/logo.svg` with your real logo (keep the filename,
   or update the `<img src="...">` references in every page's header/footer).
2. Every other image in `assets/images/` is currently a placeholder graphic
   labelled with what should go there (e.g. "Ram Kund", "Trimbakeshwar").
   Replace each file with a real photo **using the exact same filename**
   and it will update everywhere that photo is used — no HTML edits needed.
   - `assets/images/attractions/` — temples, ghats, forts, vineyards
   - `assets/images/fleet/` — your actual vehicles (12 slots: `sedan.jpg`,
     `suv.jpg`, `urbania.jpg`, `tempo.jpg` [13-seater], `tempo-17.jpg`,
     `tempo-20.jpg`, `tempo-26.jpg`, `bus.jpg` [32-seater mini bus],
     `bus-35.jpg`, `bus-40.jpg`, `bus-49.jpg`, `bus-49-nonac.jpg`)
   - `assets/images/cycle/` — the 8 stops shown on the homepage (airport, hotel,
     darshan, food, sightseeing, shopping, evening, drop-back)
   - `assets/images/hero-ghat.jpg` — homepage hero photo
   - `assets/images/about-team.jpg` — About page photo
   - `assets/images/og-cover.jpg` — the image shown when your link is shared
     on WhatsApp/Facebook (1200×630px works best)
3. Recommended photo sizes: hero ~1200×1500px, cards ~900×650px. Compress
   photos (e.g. at squoosh.app) before uploading so pages load fast.

## Adding new cities later
Duplicate `nashik-darshan.html`, rename it (e.g. `shirdi-darshan.html`),
update its content and photos, then add a link to it in the navigation menu
(`<nav class="main-nav">`) and footer on every page, plus a new `<url>` entry
in `sitemap.xml`.

## Publishing to GitHub Pages
1. Create a new GitHub repository (public, so anyone can browse the site).
2. Upload all files in this folder to the repository, keeping the folder
   structure (`assets/` must stay as a folder).
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   choose the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.

## Connecting rentmyride.in
This site is already set up for **rentmyride.in** (canonical URLs, sitemap,
robots.txt and a `CNAME` file all point to it). To go live on that domain:

1. **At your domain registrar** (wherever you bought rentmyride.in), add these
   DNS records so the apex domain points at GitHub Pages:
   - Four `A` records for `@` (root) pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional: a `CNAME` record for `www` pointing to `<your-username>.github.io`
     (lets `www.rentmyride.in` redirect to the main domain too)
2. **In the GitHub repository**: Settings → Pages → "Custom domain" →
   enter `rentmyride.in` → Save. GitHub will verify it (can take up to a
   few hours for DNS to propagate) and offer to **Enforce HTTPS** — turn
   that on once available.
3. The `CNAME` file already in this project root tells GitHub Pages which
   domain to serve — you don't need to create it again, just don't delete it.
4. If you'd rather launch first on the free `github.io` address and add the
   domain later, that's fine too — just remove the `CNAME` file for now and
   the free address will work immediately; add it back when the domain's DNS
   is ready.

## SEO checklist already handled
- Unique `<title>` and meta description per page
- `robots.txt` and `sitemap.xml` included at the site root
- Semantic headings (`h1`→`h2`→`h3`) and descriptive image `alt` text
- `TravelAgency` structured data (JSON-LD) on the homepage — update the
  phone number and address inside the `<script type="application/ld+json">`
  block in `index.html`
- Open Graph tags so shared links show a title, description and image

Once you have a real domain, update `https://rentmyride.in` in every
`<link rel="canonical">`, `og:url`, `sitemap.xml`, and `robots.txt` to match it.
