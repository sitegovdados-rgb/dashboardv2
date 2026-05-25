import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Caminho base = nome do repositório no GitHub Pages
  base: '/dashboardv2/',
  plugins: [react()],
})
