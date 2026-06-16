/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cedar: "#2f5d42",
        cream: "#f8f1e5",
        sand: "#eadcc7",
        bark: "#2b2118",
        olive: "#6f7f4f"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(43, 33, 24, 0.10)"
      }
    },
  },
  plugins: [],
};
