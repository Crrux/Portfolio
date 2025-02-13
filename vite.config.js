import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'robots.txt',
          dest: ''
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': '/src', // Example alias for easier imports
    },
  },
  server: {
    port: 3000
  },
});