/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
        width: {
            '101': '101px',
        }
    },
    colors: {
        black: '#000000',
        white: '#FFFFFF',
        cream: '#fdf7e7',
    }
  },
  plugins: [],

}

