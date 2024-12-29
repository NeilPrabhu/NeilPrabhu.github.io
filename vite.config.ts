import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
/*
export default defineConfig({
  plugins: [react()],
  base: '/', // Update this to match your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
*/

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()]
});
