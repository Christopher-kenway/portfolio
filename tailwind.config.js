/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {  
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',  
      'white': '#ffffff',
      'purple': '#C778DD',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
}
