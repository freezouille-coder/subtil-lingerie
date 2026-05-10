import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  site: isGhPages ? 'https://freezouille-coder.github.io' : 'https://subtillingerie.fr',
  base: isGhPages ? '/subtil-lingerie' : '/',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
