/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs':'320px',
      'xs':'375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'mxl': '1440px',
      '2xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}