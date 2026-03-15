// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://jhordie.me',
  compressHTML: true,
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});