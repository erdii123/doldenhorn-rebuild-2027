import { defineConfig } from 'astro/config';

// BASE erlaubt eine Vorschau unter einem Unterpfad (z.B. GitHub Pages).
// Live läuft die Seite auf der Domain-Wurzel.
export default defineConfig({
  site: 'https://doldenhorn-ruedihus.ch',
  base: process.env.BASE || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  image: { responsiveStyles: false },
});
