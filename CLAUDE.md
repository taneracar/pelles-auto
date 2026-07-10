# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/business website for Pelle's Automotive (auto repair shop). Static single-page site: home, services, appointment booking, contact. No backend — the appointment form submits directly to EmailJS from the client. Deployed on Vercel.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the repo

There is no test suite configured in this repo.

## Architecture

- **Stack**: React 18 + Vite 6 + Tailwind CSS 4 (via `@tailwindcss/vite`, no separate `tailwind.config.js`) + React Router 7.
- **Entry**: `src/main.jsx` wraps `App` in `HelmetProvider` (SEO/meta tags via `react-helmet-async`) and `I18nextProvider`. `src/App.jsx` defines routes inside `Layout`, which wraps every page with `Navbar` + `Footer`. `FloatingLanguageSwitcher` is rendered globally outside the routed pages.
- **Routing**: routes are `/`, `/services`, `/contact_us`, `/appointments`. A `/testimonials` route and its nav link exist in code but are commented out — `Testimonials.jsx` page and `HomeTestimonials.jsx` component are currently unused/dormant, not dead code to delete without checking with the user first.
- **i18n**: `src/i18n.js` configures `i18next` with `en`/`es` resources loaded directly from `src/locales/{en,es}/translation.json` (not fetched at runtime). Language detection order is querystring → cookie → localStorage → navigator → htmlTag → path → subdomain, cached to a cookie. Every page/component pulls copy via `useTranslation()`'s `t()` — when adding UI text, add the key to **both** locale files, not just `en`.
- **Content data**: static content lives in `src/constants/*.js` (e.g. `servicesData.js`, `aboutUs.js`, `testimonials.js`) as plain arrays of translation-key strings, which are then looked up through `t()` at render time rather than hardcoded copy. Follow this pattern (constants file holds structure/keys, locale JSON holds actual strings) when adding new content sections.
- **Appointment booking** (`src/pages/Appointment.jsx`): client-only form using `react-hook-form`-free manual state, `react-datepicker` for date selection, and `emailjs-com` to send the booking directly to an EmailJS template (service/template/user IDs are hardcoded in this file). Booking rules enforced in both the date-change handler and submit handler: no weekends, no dates before the upcoming Monday (`getNextMonday`). `react-toastify` shows validation/success/error toasts.
- **Assets**: images live under `src/assets/<Section>/` with a co-located `<section>Images.js`/data file that exports the imports as an array (see `src/assets/Hero/heroImages.js`); static public files (favicon, logos, robots.txt, sitemap.xml) are in `public/`.
- **SEO**: each page sets its own `<Helmet>` block (title, canonical, description, OG tags) rather than a shared layout-level default — copy these keys from the `helmet.*` section of the locale files when adding a page.
- **Deployment**: `vercel.json` rewrites all paths to `/index.html` for client-side routing (SPA fallback).
