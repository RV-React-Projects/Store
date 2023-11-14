/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        light: "#f2f2f2",
        secondary: "#3498db",
        primary_color: " #ff6b6b",
        secondary_color: "#794afa",
        secondary_dark_color: " #453c5c",

        light_bg_color: " #f2f3f5",
        light_text_color: " #7c899a",
        border_color: " #e5e8ec",
        dark_color: " #0a021c",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
});
