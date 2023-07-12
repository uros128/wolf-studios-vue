/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        uros: {
          DEFAULT: "#8299AB",
          50: "#FFFFFF",
          100: "#F0F3F5",
          200: "#CBD5DC",
          300: "#A6B8C4",
          400: "#8299AB",
          500: "#567E9F",
          600: "#4B6D8B",
          700: "#405C77",
          800: "#364C63",
          900: "#2B3C50",
        },
        // primary: colors.slate,
        accent: colors.lime,
      },
    },
  },
  plugins: [],
};
