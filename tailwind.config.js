/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 74.7px 27px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}