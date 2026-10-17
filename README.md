# Arun Kumar — Freelance portfolio

React + TypeScript, Tailwind CSS v4, Vite, Framer Motion, React Router, and Lucide icons. A freelance portfolio with an ink-black and electric-blue visual identity.

## Development

- Run `npm install` then `npm run dev`.
- `npm run build` checks TypeScript and creates `dist/`.
- `npm run preview` serves the production build.
- `npm run test:e2e` runs browser checks using installed Google Chrome.

## Structure

Each route has its own page folder. Page components only render their named composition component:

- `src/pages/Home/HomePage.tsx` → `src/components/Home/Home.tsx`
- `src/pages/Work/WorkPage.tsx` → `src/components/Work/Work.tsx`
- `src/pages/NotFound/NotFoundPage.tsx` → `src/components/NotFound/NotFound.tsx`

Each composition imports the sections in its component folder. Reusable project cards, dialogs, previews, and reveal animations live in `src/components/Shared/`.

## Styling

Tailwind is integrated through `@tailwindcss/vite`. Layouts, responsive breakpoints, colors, hover states, and glass effects use Tailwind utilities directly in TSX.

`src/styles/global.css` only contains the Tailwind import, theme tokens, base accessibility rules, a few shared primitives (button, container, section title), and reduced-motion behavior. Change the `@theme` colors and font tokens to adjust the brand.

## Project collection

Edit `src/data/projects.ts`. All nine supplied projects are included:

Public website screenshots are stored locally in `public/projects/`. The first three featured projects appear on the homepage; all projects appear on `/work`. Cards provide a direct website link and a details dialog. UNIF CRM links to its public product page rather than a private application.

Add another entry:

```ts
{
  id: 'project-id',
  title: 'Project name',
  category: 'Web applications', // or 'Web design'
  summary: 'A short description for the project card.',
  description: 'A factual overview of the product and your contribution.',
  tags: ['Product category', 'Confirmed technology'],
  image: '/projects/project-id.webp',
  liveUrl: 'https://your-project.example',
  sourceUrl: 'https://github.com/your-account/repository', // optional
  featured: false,
  context: 'SRDT', // optional; identifies professional work at SRDT
  monogram: 'PR',
  accentClass: 'bg-[#152554]', // use complete static Tailwind classes
}
```

If a screenshot is missing, a branded title panel appears. The original concept projects and mock dashboards have been removed. Product descriptions are based on the public sites and supplied context; they do not invent project-specific technology stacks or performance metrics.

## Personal details

Edit `src/data/profile.ts` for email, availability, GitHub, and LinkedIn. Hire buttons open an email client; the service links prefill an enquiry outline. Email copying provides a readable fallback when clipboard access is unavailable.

Update background and résumé metrics in `src/components/Home/About.tsx`. Update metadata in `index.html` and titles in `src/App.tsx`.

## Checks and accessibility

Browser tests cover all nine project links and screenshots, category filtering, keyboard dismissal and focus restoration, image fallback, copy-email behavior, FAQs, mobile menus, routes, and horizontal overflow. Screenshots and test artifacts are saved to the ignored `.qa/` folder.

Navigation supports keyboard focus and Escape, pages include a skip link, dialogs use native focus trapping, FAQ disclosures are native HTML, and animations respect reduced-motion preferences.

## Deployment

Publish `dist/` after `npm run build`. Configure an SPA fallback to `index.html` for direct visits to `/work`. Netlify and Vercel routing files are included. For a subdirectory deployment, configure Vite's base and the router basename.

Google Fonts loads with system fallbacks; self-host the fonts if desired.
