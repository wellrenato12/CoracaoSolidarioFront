/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roseOscuro: '#c72944',
        roseFucsia:'#b6274a',
      },
      boxShadow: {
        'custom': '0px 4px 74.7px 27px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      plugins: [],
    }
  }
}