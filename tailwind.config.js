export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        silver: '#C0C0C0',
        metallic: '#A5A5A5', // Beispiel Metallgrau
        primary: '#1F2937', // dunkles Grau
        secondary: '#6B7280', // Mittelgrau
         metallicGray: '#5b5b5b', //Mettalic Grau
      },
    },
  },
  plugins: [require("daisyui")],
}
