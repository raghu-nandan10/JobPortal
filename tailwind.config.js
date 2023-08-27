/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        smokeWhite: "#ECECEC",
      },
      backgroundImage: {
        jobOpenings: "url(./assets/openings2.svg)",
      },
    },
  },
  plugins: [],
};
