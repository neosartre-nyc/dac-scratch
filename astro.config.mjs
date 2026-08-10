import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',

  adapter: cloudflare({
    imageService: 'cloudflare-binding',
  }),

  vite: {
    // Force compatibility mode
    optimizeDeps: {
      rolldownOptions: {}
    },

    // Stronger warning suppression
    config: {
      onwarn(warning, warn) {
        if (warning.message?.includes('optimizeDeps.rolldownOptions')) return;
        warn(warning);
      },
    },

    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.message?.includes('optimizeDeps.rolldownOptions')) return;
          warn(warning);
        },
      },
    },

    // Important for the moduleType error
    ssr: {
      noExternal: ['@astrojs/cloudflare'],
    },
  },
});