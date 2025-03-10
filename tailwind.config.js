/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your JavaScript and TypeScript files in src
    './public/index.html' // If you're including any HTML in your public directory
  ],
  theme: {
    extend: {
      // Extend the theme to include the Raleway font family
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add Raleway font
      },
      fontWeight: {
        light: 300,
        extrabold: 800,
      },
    },
  },
  plugins: [],
}
