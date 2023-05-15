/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'crimson-text': ['Crimson Text', 'serif'],
        'Ysabeau': ['Ysabeau', 'sans-serif']
      },
    },
  },
  plugins: [],
}

