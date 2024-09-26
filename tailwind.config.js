/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white-color": "#F9F8F8",
        "secondary-white-color": "F7F9FB",
        "dark-white-color": "#FEFFFF",
        "primary-text-color": "#344767",
        "grey-color": "rgb(103, 116, 142)",
        "blackish-grey-color": "rgb(52, 71, 103)",
        "light-grey-color": "#96A0B1",
        "primary-theme-color": "rgba(214, 17, 40, 1)",
      }
    },
  },
  plugins: [],
});
