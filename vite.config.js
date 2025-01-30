import { defineConfig } from 'vite';
import htmlComponentPlugin from './vite-plugin-html-components.js';

export default defineConfig({
  // assetsInclude: ['**/*.html'],
  plugins: [htmlComponentPlugin()]
});
