import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' must match your repository name if not using a custom domain. 
  // './' is a safe default for hash routing on GitHub Pages.
  base: './',
  define: {
    // This prevents "process is not defined" errors in the browser
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});