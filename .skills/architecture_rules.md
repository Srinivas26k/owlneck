# Architecture & Refactoring Rules

## 1. Tech Stack Constraints
* **Framework:** Vite + React (TypeScript).
* **Styling:** Tailwind CSS (Mobile-First).
* **Animation:** Framer Motion (Mandatory for "smoothness").
* **Icons:** Lucide-React (Use thin strokes).

## 2. Component Requirements
* **Navbar:** Must be "Sticky Glass" style.
* **Layout:**
    * Desktop: Asymmetrical "Bento Grids" (CSS Grid).
    * Mobile: Linear vertical stacking with generous padding (py-12).
* **Forms:** No backend required yet. Use controlled inputs.

## 3. The "Fix It" Checklist
When refactoring components:
1.  **Strip:** Remove all existing dark backgrounds (`bg-gray-900`, `bg-black`).
2.  **Flatten:** Remove nested `div` soups. Use semantic HTML (`<section>`, `<article>`).
3.  **Typos:** Fix all "Lorem Ipsum" and bad grammar. Use the brand voice ("Secure," "Scalable," "Institutional").