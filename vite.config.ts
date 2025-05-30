import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      writeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html');
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
