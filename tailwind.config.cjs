/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
      },
    },
  },
  plugins: [require("daisyui")],
}
