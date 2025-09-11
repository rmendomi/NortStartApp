import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Muy importante para que los assets funcionen bajo /NortStartApp/
  base: '/NortStartApp/',
})
