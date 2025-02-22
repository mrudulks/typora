/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        ...colors,
        primary: '#B2ABFF',
        secondary: '#C4BFFF',
        tertiary: '#C9CACA',
        quaternary: '#FCE9EA',
        quinary: '#B6E7FC',
      },
    },
  },
  plugins: [],
}