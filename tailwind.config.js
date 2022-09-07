/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand: '#0095f6',
        link: '#00376b',
        input: '#fafafa',
        kavun: "#00a295",
        kavunLight: "#3dcda7",
        turtlesXL: "#46a094",
        turtlesL: "#6bbd99",
        turtlesM: "#aecfa4",
      },
      backgroundImage: {
        'logo-pattern': "url('../public/images/back-comp.jpg')",
        'back-blur': "url('../public/images/back-blur.jpg')",
        'wine': "url('../public/images/wine.jpg')",
      }
    },
  },
  plugins: [],
}
