// Vite configuration file
// Vite is a fast build tool and development server for modern web projects

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Export Vite configuration
export default defineConfig({
  plugins: [react()], // Enable React support with JSX transformation
})