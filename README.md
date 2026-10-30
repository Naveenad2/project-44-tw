# Arqivo LLP — Company Website

Marketing website for **Arqivo LLP**, a business process outsourcing company.
Built with Next.js 16 (App Router, Cache Components), TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Copy `.env.example` to `.env.local` and fill in the values.

## Editing content

| What | Where |
| --- | --- |
| Company name, phones, email, hours, leader | `src/lib/site.ts` |
| Services (cards, detail pages, FAQs) | `src/lib/services.ts` |
| Industries | `src/lib/industries.ts` |
| Home page sections & highlight numbers | `src/app/page.tsx` |
| Brand colours & fonts | `src/app/globals.css` (`@theme`) |
| Logo | `src/assets/arqivo-mark.png` (also `public/brand/`) |

Adding a service to `services.ts` automatically creates its page, menu entry, footer link and sitemap entry.

## Pages

`/`, `/about`, `/services`, `/services/[slug]` (8 statically generated pages), `/industries`, `/careers`, `/contact`, `/privacy`, plus a custom 404.
SEO: per-page metadata, Open Graph image, favicon/app icons generated from the logo, `sitemap.xml`, `robots.txt`, web manifest and JSON-LD (Organization, Service, FAQ).

## Contact form

`src/app/contact/actions.ts` is a Server Action. With `RESEND_API_KEY` set, enquiries are emailed to `CONTACT_TO_EMAIL`. Without it, the form validates and then offers a pre-filled email to the company address, so it works out of the box.

## Performance notes

- All pages are prerendered; no client-side data fetching.
- Only the mobile menu, nav active state and contact form ship client JavaScript.
- Scroll reveal animations are pure CSS (`animation-timeline: view()`), with reduced-motion support.
- Fonts are self-hosted via `next/font`; images served as AVIF/WebP via `next/image`.

## Deploy

Works on Vercel or any Node.js host (`npm run build && npm start`). Set `NEXT_PUBLIC_SITE_URL` to the live domain.
