/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      fontFamily:{
        title: ['Montserrat', 'sans-serif'],
        cuerpo: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}