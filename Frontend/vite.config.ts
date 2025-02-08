import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server :{
    proxy : {
      "/api": "https://social-media-bio-generator-19hd.onrender.com"
    }
  },
  plugins: [react() , tailwindcss()],
  optimizeDeps : {
    exclude: ['lucide-react']  
  }
})
