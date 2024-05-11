import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' //1


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/": "https://jayblog.onrender.com",
      //"/api/": "http://localhost:5000",
      //"/uploads/": "http://localhost:5000",
    },
  },
  plugins: [react(), tailwindcss()],
})
