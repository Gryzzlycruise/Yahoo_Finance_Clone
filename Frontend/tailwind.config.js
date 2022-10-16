/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'white',
        none: 'none',
      },
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
