/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '100',
      // @media (min-width: 100px)

      'md': '640px',
      // @media (min-width: 768px)

      'lg': '1024px',
      // @media (min-width: 1024px)

      'xl': '1440px',
      // @media (min-width: 1024px)
    },
  },
  plugins: [],
}
