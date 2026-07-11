import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',        // or 'hybrid' / 'static'
  adapter: cloudflare({    // ← Now it's being used
    imageService: 'cloudflare',   // or 'compile', 'cloudflare-binding', etc.
  }),
});