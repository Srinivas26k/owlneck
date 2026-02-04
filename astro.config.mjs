import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cyberarcmsp.com',
  integrations: [
    react(),
    sitemap({
      // Optimize sitemap for SEO
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      
      // Customize priority and frequency per page type
      serialize(item) {
        // Homepage - highest priority
        if (item.url === 'https://cyberarcmsp.com/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
          item.lastmod = new Date();
          return item;
        }
        
        // Main navigation pages - high priority
        if (/\/(about|services|contact)\/?$/.test(item.url)) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
          item.lastmod = new Date();
          return item;
        }
        
        // Individual service pages - high priority
        if (/\/services\/[^/]+\/?$/.test(item.url)) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
          item.lastmod = new Date();
          return item;
        }
        
        // Default for other pages
        item.changefreq = 'monthly';
        item.priority = 0.6;
        return item;
      },
      
      // Remove unused XML namespaces for cleaner sitemap
      namespaces: {
        news: false,
        video: false,
      },
    }),
  ],
  output: 'static',
  vite: {
    ssr: {
      external: ['@heroui/react'],
    },
    plugins: [tailwindcss()]
  },
});