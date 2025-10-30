// Vite configuration file
// Vite is a fast build tool and development server for modern web projects

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 👈 allow access from sandbox environment
    port: 5173,      // 👈 default vite port
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "*.csb.app",       // 👈 allow CodeSandbox subdomains
      "*.stackblitz.io", // 👈 allow StackBlitz subdomains
      "*",               // 👈 wildcard (development only)
    ],
  },
});

