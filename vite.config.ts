import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react-icons')) return 'icons';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
});
