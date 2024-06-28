/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
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

