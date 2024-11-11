import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Set to root for Render deployment

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
