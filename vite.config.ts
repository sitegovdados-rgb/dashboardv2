import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/' é o correto para Vercel (domínio raiz)
  // Se usar GitHub Pages, mude para base: '/dashboardv2/'
  base: '/',
  plugins: [react()],
})
