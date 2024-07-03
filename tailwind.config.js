/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {  
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

