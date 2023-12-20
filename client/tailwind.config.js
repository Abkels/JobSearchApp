/** @type {import('tailwindcss').Config} */
// import img from "./src/assets/"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero" : 'url("./src/assets/headache.jpg")'
      // }
      colors: {
        "blueColor": '#2a68ff',
        "greyIsh": '#f1f4f8',
        "cardShadow":"#f7f8f9",
        "textColor": "#252b36"
      }
    },
  },
  plugins: [],
}