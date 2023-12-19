/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "primary":"#1A1A1A",
        "purple":"#703BF7",
        "secondary":"#262626",
      },
      backgroundImage: {
        'header-img': "url('../assets/Images/header_line.svg')",
      },
      textColor: {
        "lightgray": "#999",
      },
      borderColor:{
        "darkgray":'#262626'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
