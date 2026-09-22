import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
          'ui': ['react-icons', 'lucide-react', 'react-hot-toast', 'sonner'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})