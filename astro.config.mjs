// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mahfujrahman.com',
  output: 'static',
  vite: {
    // Tailwind's Vite plugin type currently disagrees with Astro's bundled Vite types.
    // Runtime is fine; this keeps astro check from failing on the config file itself.
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
