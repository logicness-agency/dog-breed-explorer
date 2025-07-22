export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beigeLight: "#f5f1e7",
        textPrimary: "#4b4a47",
        primary: "#a89f91",
        secondary: "#bfb7aa",
        metallicGray: "#5b5b5b",
      },
    },
  },
  plugins: [require("daisyui")],
};
