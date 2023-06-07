/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        latoRegular: ["Lato Regular", "sans-serif"],
        latoBold: ["Lato Bold", "sans-serif"],
      },
      screens: {
        laptop: { max: "1400px" },
        tablet: { max: "980px" },
        mobile: { max: "640px" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
