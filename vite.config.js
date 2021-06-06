import { defineConfig } from 'vite';

import { minifyHtml } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile(), minifyHtml()],

  build: {
    outDir: 'build',
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => 'everything.js',
      },
    },
  },
});
