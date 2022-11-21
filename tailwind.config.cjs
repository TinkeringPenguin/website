/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010101",
        secondary: "#F9F9F9",
        highlight: "#A348F6",
        accent: "#0047FF",
        accentDark: "#168FFF",
        button: "#0047FF",
        buttonHover: "#0033B8",
        borderDiv: "#B8B8B8",
      },
      screens: {
        "-2xl": { max: "1535px" },
        "-xl": { max: "1279px" },
        "-lg": { max: "1024px" },
        "-md": { max: "768px" },
        "-sm": { max: "640px" },
        "3xl": { min: "1820px" },
      },
    },
  },
  plugins: [],
};
