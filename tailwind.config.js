/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "bright-Gray": "#F7F8F8",
        "light-Gray1": " #DDDADA",
        "light-Gray2": " #ADA4A5",
        "light-Gray3": " #7B6F72",
        purpleBlue: "#92A3FD",
        cyanBlue: "#9DCEFF",
        purplePink: "#EEA4CE",
        swallow: "#C58BF2",
      },
    },
  },
  plugins: [],
};
