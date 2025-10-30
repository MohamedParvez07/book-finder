// Vite configuration file
// Vite is a fast build tool and development server for modern web projects

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Export Vite configuration
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'f8mm38-5173.csb.app'
      '*'// 👈 add your sandbox host here
    ]
  }
})
