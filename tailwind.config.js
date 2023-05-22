/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark: '#323232',
        light: '#ffffff',
        primary: '#00ddb3',
        grey: '#E8EDF0'
      }
    },
  },
  plugins: [],
}

