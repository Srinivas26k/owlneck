# Brand Manifesto: Cyberarcmsp

## 1. Visual Identity Rules
* **The Vibe:** "Medical-Grade Cleanliness" meets "Institutional Authority." Think Swiss Bank or High-End Clinic, not "Gamer/Hacker."
* **STRICT BAN:** DO NOT use Black (#000000) or Dark Mode backgrounds.
* **Primary Background:** Pure White (#FFFFFF) only.
* **Typography:**
    * Headings: Serif (Playfair Display/Merriweather) for trust.
    * Body: Sans-Serif (Inter/Plus Jakarta) for clarity.

## 2. Color Palette (Tailwind Mapping)
Use these EXACT colors. Do not invent others.
* `bg-white` → Main Canvas.
* `text-navy-900` (#0A1628) → Primary Text (Replaces Black).
* `text-navy-700` (#334155) → Secondary Text.
* `bg-electric-blue` (#2563EB) → Primary Actions (Buttons).
* `text-electric-blue` (#2563EB) → Links/Accents.
* `border-gray-100` (#F1F5F9) → Subtle dividers.

## 3. "The Mesmerize Factor"
* **Glassmorphism:** Use `backdrop-blur-md bg-white/70` for Navbars and floating cards.
* **Shadows:** Use `shadow-xl` with a soft, blue tint (`shadow-blue-900/5`) to lift objects off the white page.
* **Motion:** Every element must fade in slightly (`framer-motion` initial={{opacity:0, y:20}}).