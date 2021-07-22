const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        darkblue: "#0e1726",
        primary: "#3B82F6",
        danger: "#EF4444",
        success: "#10B981",
        secondary: "#8B5CF6"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
