/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#314932ff',  
        sage: '#819067',     
        sand: '#cac499ff',     
        cream: '#FEFAE0',    
      },
    },
  },
  plugins: [require("daisyui")],
}
