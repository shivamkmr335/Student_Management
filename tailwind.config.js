const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        darkblue: "#0e1726",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
