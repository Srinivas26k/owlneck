# OWLNECK - Enterprise IT Services

A high-performance, single-page React application for an enterprise IT services company.

## Design
- **Style**: Hand-crafted, premium aesthetic (No templates).
- **Colors**: Custom palette (Primary Blue #001BB7, Electric Blue #0046FF).
- **Typography**: Inter (Google Fonts).
- **Effects**: Custom cursor, Scroll reveal, Parallax, Glassmorphism.

## Tech Stack
- **Framework**: React 18+ (Vite)
- **Styling**: CMP (Tailwind CSS) - pure utility classes.
- **Routing**: HashRouter (react-router-dom).
- **Icons**: Lucide React.
- **Animations**: CSS Keyframes + Intersection Observer.

## Getting Started

1. **Install Dependencies**
   ```bash
   bun install
   ```

2. **Run Development Server**
   ```bash
   bun run dev
   ```

3. **Build for Production**
   ```bash
   bun run build
   ```

## Structure
- `src/components`: Global UI components (Header, Footer, Cursor).
- `src/pages`: Page views (Home, About, Services, Contact).
- `src/App.tsx`: Main entry with Routing.
- `tailwind.config.js`: Design tokens and strict theming.
