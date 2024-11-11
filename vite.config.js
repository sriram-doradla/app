import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://app-bzcv.onrender.com', // Use the root for Render deployment

  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: 'https://ram-o7av.onrender.com', // Your Express server address
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Ensure assets are correctly bundled
    rollupOptions: {
      output: {
        manualChunks: undefined, // Keeps assets in a single chunk
      },
    },
  },
});
