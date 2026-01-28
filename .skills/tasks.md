# Active Refactoring Tasks

## Phase 1: The Foundation (Execute First)
1.  **Tailwind Overhaul:** Update `tailwind.config.js` to define the custom colors (`navy`, `electric-blue`) defined in `brand_manifesto.md`.
2.  **Typography:** Install `@fontsource/playfair-display` and `@fontsource/inter`. Configure them in `index.css`.
3.  **Global Reset:** Ensure `index.html` and `body` have `bg-white` and `text-navy-900`.

## Phase 2: Component Reconstruction
1.  **Navbar:** Rewrite `src/components/Header.tsx`. Make it a floating glass bar with links: Home, Services, About, Contact.
2.  **Hero Section:** Rewrite `src/components/home/Hero.tsx`.
    * **Old:** Generic image with centered text.
    * **New:** Left-aligned Serif Headline ("Institutional-Grade Security"), Right-aligned abstract 3D element (placeholder div), White background.
3.  **Services:** Rewrite `src/components/home/Services.tsx` to use a "Bento Grid" layout.
    * Create `ServiceCard` component: White card, soft shadow, hover lift effect.

## Phase 3: Polish
1.  **Responsiveness:** Check all grids. If `w-full` on mobile, ensure `grid-cols-1`.
2.  **Animation:** Wrap page transitions in `AnimatePresence`.