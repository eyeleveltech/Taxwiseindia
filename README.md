# TaxwiseIndia — Next.js 16 Web Application

A high-performance, modern Next.js 16 (App Router) port of the **TaxwiseIndia** web application. Built with **TypeScript**, **Turbopack**, **GSAP 3** + **ScrollTrigger**, **Lenis** smooth scrolling, and an accessible, responsive design system.

---

## 🚀 Key Highlights & Architecture

- **Next.js 16 (App Router)**: Fast Server Components by default with client components isolated for GSAP motion.
- **Turbopack**: Optimized static generation for the application routes.
- **GSAP 3.13 & ScrollTrigger**:
  - Pinned horizontal 3-step timeline (`HowItWorks.tsx`)
  - Scroll-driven flow line and status nodes (`Promise.tsx`)
  - Cascading notification simulation (`StopChasing.tsx`)
  - Staggered batch card reveals (`Services.tsx`)
  - 3D perspective mouse parallax (`Hero.tsx`)
  - Every animated component uses `useGSAP` from `@gsap/react` (scoped selectors, automatic revert on unmount)
  - Server-rendered pages get intro + scroll reveals through the `Reveal` wrapper (`components/ui/Reveal.tsx`)
- **Lenis Smooth Scroll**: one instance for the whole app (`hooks/useLenis.ts`), mounted by `components/layout/SmoothScroll.tsx`, which also resets scroll on route change, glides same-page anchors (pinned sections included) and refreshes ScrollTrigger when fonts/images land.
- **Tailwind CSS v4**: utilities only (no preflight), with the client palette and fonts declared as theme tokens in `app/tailwind.css`. `app/globals.css` keeps the handful of shared primitives (`.wrap`, `.sec`, `.btn`, `.key`, `.eyebrow`, `.note`, `.glass`, `.coin`). No CSS modules. Interactive states are data attributes (`data-open`, `data-active`, `data-on`, `data-hidden`) styled with `data-*:` / `group-data-*:` variants, so GSAP and React only toggle attributes.
- **Zero-Layout-Shift Fonts**: Self-hosted `Inter` and `Plus Jakarta Sans` through `next/font/google`.
- **SVG Symbol Sprite System**: Scalable, resolution-independent vector icons with customized stroke/fill cascading.
- **Complete Route Coverage**: Dedicated landing pages and metadata for all services, company pages, legal policies, and knowledge bases.

---

## 📁 Project Structure

```
taxwise-nextjs/
├── app/
│   ├── layout.tsx                # Global layout (Fonts, SEO Metadata, Schema.org, Header, Footer)
│   ├── page.tsx                  # Home landing page assembling all 11 animated sections
│   ├── globals.css               # Base resets, shared primitives (.wrap .sec .btn .key .eyebrow .note .glass .coin), keyframes
│   ├── tailwind.css              # Tailwind v4 theme tokens (palette, fonts, easing) + utilities
│   ├── services/                 # Services index, seven category pages ([slug]/) and 46 service pages ([slug]/[item]/)
│   ├── about/                    # About Us page
│   ├── contact/                  # Contact page with interactive WhatsApp inquiry form
│   ├── careers/                  # Careers & job openings
│   ├── blog/                     # Blog & tax articles
│   ├── tax-guides/               # Tax checklists and guides
│   ├── gst-updates/              # GST statutory notifications feed
│   ├── business-guides/          # Incorporation roadmaps
│   ├── privacy-policy/           # Privacy policy
│   ├── terms/                    # Terms of service
│   ├── refund-policy/            # Refund & cancellation policy
│   └── disclaimer/               # Legal regulatory disclaimer
├── components/
│   ├── layout/                   # Header, Footer, FooterGiant, ProgressBar, SmoothScroll, IconSprite
│   ├── services/                 # ServicesIndex (list + ServicesOrbit), ServicePage (category + ServiceHeroScene 3D), ServiceItemPage (one service)
│   ├── company/                  # CompanyMotion shell + shared class strings for About/Contact
│   ├── content/                  # ContentPage primitives for guides, updates, careers and legal pages
│   ├── sections/                 # 11 Landing page sections (Hero, Services, Why, FAQ, etc.)
│   └── ui/                       # ContactForm, SvgIcon, Reveal (intro + scroll reveals for server pages)
├── hooks/
│   ├── useLenis.ts               # Lenis scroll controller
│   ├── useFinePointer.ts         # Pointer accuracy detector using useSyncExternalStore
│   └── useReducedMotion.ts       # prefers-reduced-motion hook
├── lib/
│   ├── constants.ts              # Centralized data for services, FAQs, and business contact info
│   ├── services.ts               # Service catalog, promise steps and legacy link mappings
│   ├── service-details.ts        # Per-service content (summary, documents, steps, timeline) — DRAFT, verify before launch
│   └── metadata.ts               # Shared SEO metadata & JSON-LD schemas
└── public/
    └── assets/                   # Brand marks, favicon, and graphic assets
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Run Production Server Locally
```bash
npm run start
```

### 5. Lint & Typecheck
```bash
npm run lint
npx tsc --noEmit
```

---

## ⚙️ Configuration & Customization

All primary company parameters are centralized in [`lib/constants.ts`](lib/constants.ts):

- **WhatsApp URL**: Modify `WHATSAPP_URL` to update the WhatsApp link across all buttons and forms.
- **Contact Details**: Update `CONTACT_INFO` for phone numbers, email addresses, and office location.
- **Service Catalog**: Edit `SERVICE_CATALOG` in [`lib/services.ts`](lib/services.ts) to update the seven categories and their items; each item's page content (summary, documents, steps, timeline, optional price) lives in [`lib/service-details.ts`](lib/service-details.ts). `LEGACY_SERVICE_LINKS` maps the eight previous routes; permanent redirects are configured in `next.config.ts`.
- **Service Components**: `components/services/` contains the index (with the seven-service orbit) and the single detail-page template (with the service's 3D sculpture).
- **Interactive service artwork**: `ServiceHeroScene.tsx` (the hero of every `/services/[slug]` page) lazy-loads `lib/service-sculpture.ts`, which builds seven Three.js sculptures locally. Scenes support drag/rotation controls, pause, reduced motion, and a static fallback when WebGL is unavailable.

---

## 🚢 Deployment (Vercel)

1. Push this repository to GitHub or GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. The build command `npm run build` will automatically run Turbopack static prerendering.
4. Deployment completes in seconds with zero extra configuration needed.

## End-to-end tests

```bash
npx playwright install
npm run build
npm run test:e2e
```

Playwright checks desktop and mobile views against the local production server.

### Services and company pages

- `/services` is a concise seven-category overview: the list on the right and the orbit on the left (all seven services on one ring; it walks through them on its own, follows hover/focus, and every tile links to its page). The 46 detailed offerings live on their dedicated category pages.
- `/services/[slug]` is a clean category page: hero copy beside the category's Three.js sculpture (drag / arrow keys rotate, Space pauses, reduced-motion aware, icon fallback without WebGL), the services it covers as buttons, the four process steps, the other six categories and the CTA.
- `/services/[slug]/[item]` is one of the 46 service pages (one template, generated from `lib/service-details.ts`): summary, the documents checklist, the process steps, the rest of the category and the CTA. "Get Started" opens the contact form with the service and a message pre-filled. The header's Services menu lists all 46.
- `/about` introduces the company approach; `/contact` provides a WhatsApp draft form. `?service=trademark-ip` (or another catalog slug) preselects the service.
- Main Get Started buttons route to Contact. The form opens a draft; it does not send a message or submit to a backend.
- Company page motion and styles live in `components/company/`. Configure the real phone number and WhatsApp destination in `lib/constants.ts` before using inquiries in production.
