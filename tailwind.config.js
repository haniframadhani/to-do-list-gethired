/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // container: {
    //   center: true
    // },
    extend: {
      colors: {
        'out-of-blue': {
          000: '#ecf7ff',
          100: '#daefff',
          200: '#c7e7ff',
          300: '#b3dffe',
          400: '#a0d7fe',
          500: '#8bcefd',
          600: '#76c6fc',
          700: '#5fbdfb',
          800: '#43b4fa',
          900: '#16ABF8',
        },
        'black': '#111'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
