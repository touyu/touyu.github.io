/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'Arial', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        righteous: ['Righteous', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
