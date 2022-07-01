/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Fundo-dark': '#303030',
        'Cor-Secundaria': '#4A148C',
        'Cor-Texto': '#ffffff',
        'Fundo-Secundario': '#424242'
      }
    },
  },
  plugins: [],
}
