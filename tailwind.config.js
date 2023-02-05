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
        'waterlemonade': {
          000: '#ffeeee',
          100: '#ffdedd',
          200: '#ffcdcc',
          300: '#ffbcbc',
          400: '#feabac',
          500: '#fc9a9b',
          600: '#f9888b',
          700: '#f6767c',
          800: '#f2626c',
          900: '#ed4c5c',
        },
        'black': '#111'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
