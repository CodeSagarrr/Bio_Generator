import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server :{
    proxy : {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [react() , tailwindcss()],
  optimizeDeps : {
    exclude: ['lucide-react']  
  }
})
// https://social-media-bio-generator-7pna.onrender.com
