module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        belly: "#EA3361",
        beak: "#F5C042",
        eyes: "#5FD2FA",
        sky: {
          100: "#C9DBEC",
          200: "#335780",
          300: "#244366",
          400: "#162D4C",
          600: "#0B2440",
          800: "#0A182A",
          900: "#080B10",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
