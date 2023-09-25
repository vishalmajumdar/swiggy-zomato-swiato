/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playball: ["Playball", "cursive"],
      playfairDisplay: ["Playfair Display", "serif"],
    },
    extend: {
      colors: {
        "theme-color": "#aa0055",
      },
    },
  },
  plugins: [],
});
