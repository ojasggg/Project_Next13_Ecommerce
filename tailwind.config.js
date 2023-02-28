/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1366px",
      xl: "1920px",
    },
    extend: {
      colors: {
        background: "#F2F2F2",
        primary: "#4153EF",
      },
    },
  },
  plugins: [],
};
