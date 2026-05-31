import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import seoPages from './vite-plugin-seo-pages.js'

export default defineConfig({
  base: '/resume-creator/',
  plugins: [react(), tailwindcss(), seoPages()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
  },
})
