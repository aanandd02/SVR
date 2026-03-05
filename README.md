# Shree Vishwanath Roadways (SVR) Website

Official marketing website for **Shree Vishwanath Roadways**, built with React + Vite.

Live URL: https://svr-1skj.onrender.com/

## Project Overview

This is a single-page logistics website for SVR (Vapi, Gujarat) with:
- company introduction and service highlights
- fleet gallery with lightbox
- testimonial carousel
- contact section + Google Maps embed
- floating WhatsApp and "Get Quote" actions
- PWA manifest + service worker based caching

## Implemented Features

- Hero section with video background (`public/hero-bg.mp4`), particle animation (`react-tsparticles`), and responsive navbar section highlighting
- external Admin Portal link: `https://svr-builty.onrender.com`
- Lazy-loaded sections using `React.lazy` + `Suspense` for non-hero content
- Animated stats counter on viewport intersection
- Testimonial auto-play carousel with manual navigation
- Gallery lightbox with next/previous controls
- Floating inquiry popup form posting to Web3Forms API
- Terms & Conditions and Privacy Policy modal pages in footer
- Back-to-top button and WhatsApp quick-contact button
- Service worker registration in production build and cache cleanup in development

## Tech Stack

- React 19
- Vite 7
- Framer Motion
- React Icons
- `react-tsparticles` + `tsparticles`
- Plain CSS modules/files per component

## Folder Structure

```text
.
├── public/
│   ├── sw.js
│   ├── manifest.json
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── hero-bg.mp4
│   └── Logo.png / 1.png / 2.png / 3.png / 4.png
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment (recommended)

Create `.env` in project root:

```bash
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

Note: If not set, app currently uses a fallback key defined in `src/components/ContactPopup.jsx`.

### 3. Run development server

```bash
npm run dev
```

Default local URL: `http://localhost:5173`

### 4. Production build

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

### 6. Lint

```bash
npm run lint
```

## Contact Information (From Site)

- Address: Plot No. 136-9A, Near National Plywoods, II Phase GIDC, Vapi - 396195, Gujarat
- Phone and email are intentionally not listed in this README.

## SEO / PWA Notes

- Meta tags and social tags are defined in `index.html`
- `public/manifest.json` enables installable PWA metadata
- `public/sw.js` precaches core assets and applies cache-first strategy
- `public/sitemap.xml` and `public/robots.txt` are included for indexing

## License

This repository currently does not include a separate LICENSE file.
