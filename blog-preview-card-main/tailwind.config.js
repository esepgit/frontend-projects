/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-yellow': 'hsl(47, 88%, 63%)',
        'my-white': 'hsl(0, 0%, 100%)',
        'my-grey': 'hsl(0, 0%, 50%)',
        'my-black': 'hsl(0, 0%, 7%)'
      }
    },
  },
  plugins: [],
};

