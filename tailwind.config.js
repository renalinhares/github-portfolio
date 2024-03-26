/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**html"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        PlayfairDisplay: ["Playfair Display", "serif"],
        VinaSans: ["Vina Sans", "sans-serif"],
        Inconsolata: ["Inconsolata", "monospace"]
      },
      colors: {
        'HighlighterYellow': '#FBF719'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

