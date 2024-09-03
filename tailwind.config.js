/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./component/**/*.{png,jpeg,jpg,svg}",
            "./component/**/*.{html,js}",
            "./index.html"],

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
      },

      colors: {
        'mypink': '#FB6F92',
      },

      screens: {
        'sm2x': {'min': '0px', 'max': '639px'},
      }
    }
  },

  extend: {
  },

  plugins: [],
}


