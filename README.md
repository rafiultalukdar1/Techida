# Techida – React + TypeScript + Tailwind CSS

Conversion of the original static Techida HTML/CSS/jQuery site.

## Scripts

| Command             | What it does                    |
| ------------------- | ------------------------------- |
| `npm install`       | Install dependencies            |
| `npm run dev`       | Start the Vite dev server       |
| `npm run typecheck` | Strict TypeScript check         |
| `npm run build`     | Type-check and production build |
| `npm run preview`   | Serve the production build      |

## Library replacements

| Original                       | Now                                              |
| ------------------------------ | ------------------------------------------------ |
| Bootstrap + style.css + responsive.css | Tailwind CSS v4 (Bootstrap 5 breakpoints kept) |
| Font Awesome                   | `react-icons` (Font Awesome 6 set)               |
| Owl Carousel                   | Swiper                                           |
| Animate.css + WOW.js           | Framer Motion (`src/lib/motion.ts`)              |
| jQuery                         | React hooks / native TypeScript                  |
| particles.js                   | `@tsparticles/react` + `@tsparticles/slim`       |
| followCursor.js                | `useFollowCursor` hook                           |
| jQuery Validate                | React Hook Form + Zod (`src/lib/contactSchema.ts`) |
| Bootstrap Bundle               | React state (dropdown, sidebar, accordions, tabs) |

## Structure

```
src/
  assets/      images + typed image index
  components/
    layout/    Header, Hero, nav, sidebar, Footer, ScrollToTop
    sections/  one component per page section
    ui/        shared primitives (Container, RippleButton, Collapse, ...)
  data/        typed page content
  hooks/       useTheme, useScrollPast, useCountUp, useFollowCursor
  lib/         motion helpers, form schema
  types/       shared interfaces
```
