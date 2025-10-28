// Main entry point for the React application
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Import global styles including Tailwind CSS

// Create the root element and render the App component
// StrictMode helps identify potential problems in the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)