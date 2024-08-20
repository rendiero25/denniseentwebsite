/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./components/**/*.{html,js}",
            "./images/**/*.{png,jpg,svg}"],
  theme: {
    fontFamily: {
      primary: ["Overpass", "sans-serif"]
    },
    boxShadow: {
      shadowButton: "box-shadow: 47px 78px 149px 0px rgba(0,0,0,0.36)"
    },
    keyframes: {
      move: "0% {right: -100%;} 100% {left: 100%;}"
    },
  },
  extend: {
  },
  plugins: [],
}


