/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'my-white': 'hsl(0, 0%, 100%)',
        'my-light-pink': 'hsl(275, 100%, 97%)',
        'my-grayish-purple': 'hsl(292, 16%, 49%)',
        'my-dark-purple': 'hsl(292, 42%, 14%)',
        'my-bright-purple': 'rgba(173, 40, 235, 1)'
      },
      backgroundImage: {
        'mobile': "url('../assets/images/background-pattern-mobile.svg')",
        'desktop': "url('../assets/images/background-pattern-desktop.svg')"
      }
    },
  },
  plugins: [],
};

