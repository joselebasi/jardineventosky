// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://joselebasi.github.io',
  base: 'jardineventosky',

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [icon()],
});