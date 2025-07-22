export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beigeLight: "#f5f1e9",
        primary: "#6d584c",
        secondary: "#a0907e",
        textPrimary: "#4b3d33",
      },
    },
  },
  plugins: [require("daisyui")],
};
