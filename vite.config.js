import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base URL for GitHub Pages deployment
  base: "/app/", // Make sure this matches your GitHub repository name

  plugins: [react()], // Use the React plugin

  server: {
    proxy: {
      '/api': {
        target: 'https://ram-o7av.onrender.com', // Your Express server address
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
