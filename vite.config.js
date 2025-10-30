// Vite configuration file
// Vite is a fast build tool and development server for modern web projects

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",      // let Vite listen on all interfaces
    port: 5173,           // default port
    allowedHosts: ["*"],  // ✅ allow every host (safe for dev / CodeSandbox)
  },
});


