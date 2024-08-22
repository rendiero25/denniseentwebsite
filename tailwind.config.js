/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./components/**/*.{html,js}",
            "./images/**/*.{png,jpg,svg}"],
  theme: {
    fontFamily: {
      primary: ["Overpass", "sans-serif"]
    },
    extend: {
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(1%)'},
          '100%': {transform: 'translateX(-1%)'},
        }
      },
      animation: {
        'slide-left': 'slide-left 5s linear infinite',
      }
    }
  },
  extend: {
  },
  plugins: [],
}


