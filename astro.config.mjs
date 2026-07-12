import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    runtime: 'worker',
  }),
  vite: {
    ssr: {
      noExternal: ['some-problematic-package'] // if you have a specific package causing issues
    }
  }
})