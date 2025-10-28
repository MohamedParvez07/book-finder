/** @type {import('tailwindcss').Config} */
// Tailwind CSS configuration file
// Defines which files to scan for classes and customizes the design system

export default {
  // Specify which files Tailwind should scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // All JS/TS/JSX/TSX files in src directory
  ],
  theme: {
    extend: {
      // Custom theme extensions can be added here
      // Currently using default Tailwind theme
    },
  },
  plugins: [
    // Additional Tailwind plugins can be added here
  ],
}