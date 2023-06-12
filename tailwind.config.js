/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
      // Some useful comment
    extend: {
      fontFamily: {
        'monserrat': ['Montserrat', 'sans-serif'],
        'maven': ['Maven Pro', 'sans-serif']
      },
      colors: {
        darkBackground: '#312528',
        colorDescription: 'rgba(255, 255, 255, 0.57)',
        buttonBackground: '#00A89E'
      }
    },
  },
  plugins: [],
}

