/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '375px',
    },
    extend: {
      
      fontFamily: {
        main: ['Kumbh'],
      },
    },
  },
  plugins: [],
}

