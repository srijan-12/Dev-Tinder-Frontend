/** @type {import('tailwindcss').Config} */
console.log("Tailwind is processing...");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
