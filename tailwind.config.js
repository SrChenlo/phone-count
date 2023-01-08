/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradientone": "radial-gradient(#408156, 1px, transparent, 1px)"
      }
    },
  },
  plugins: [],
}