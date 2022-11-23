/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "layouts/**/*.html",
    "exampleSite/**/*.md"
  ],
  darkMode: "class",
  theme: { 
    extend: {
      gridTemplateColumns: {
        "site": "0.7fr 2.3fr 1fr"
      },
      gridTemplateRows: {
        "site": "0.2fr 2.6fr 0.2fr"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
