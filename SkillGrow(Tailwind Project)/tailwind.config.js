module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: "#1A0554",
        richBlack: "#0C0B13",
      },
      keyframes: {
        fade: {
          "0%": { transform: "translateY(-8%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        roll: {
          "0%": { width: "4rem" },
          "100%": { width: "20rem" },
        },
      },
    },
  },
  plugins: [],
};
