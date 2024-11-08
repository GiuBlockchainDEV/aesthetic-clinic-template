/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
      },
      colors: {
        gold: {
          500: '#A6915E',
          600: '#8A7A4F', // A slightly darker shade for hover states
        },
      }
    },
  },
  plugins: [],
}