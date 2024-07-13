/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        work_sans: "\"Work Sans\", sans-serif",
      }
    },
    screens: {
      sm: '0px',
      md: '620px',
      lg: '1060px',
      xl: '1200px',
    }
  },
  plugins: [],
}