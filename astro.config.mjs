import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cyberarcmsp.com',
  integrations: [
    react(),
    sitemap(),
  ],
  output: 'static',
  vite: {
    ssr: {
      external: ['@heroui/react'],
    },
    plugins: [tailwindcss()]
  },
});