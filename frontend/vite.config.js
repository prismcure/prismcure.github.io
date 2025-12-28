import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Base path configuration for GitHub Pages:
// 
// Option 1: If repo is named "prismcure" → URL: https://[username].github.io/prismcure/
//   base: '/prismcure/'
//
// Option 2: If repo is "prismcure.github.io" in org → URL: https://prismcure.github.io/
//   base: '/'
//
// Change the base path below based on your repository setup:
export default defineConfig({
  plugins: [react()],
  // For https://prismcure.github.io (organization repo), use: '/'
  // For https://[username].github.io/prismcure (regular repo), use: '/prismcure/'
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
})
