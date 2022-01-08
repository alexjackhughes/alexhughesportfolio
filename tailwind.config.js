module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        pink: "#EA3361",
        sky: {
          200: "#76FBF8",
          500: "#202B41",
          800: "#080B10",
        },
      },
    },
    boxShadow: {
      "2xl": "0px 64px 128px rgba(7, 18, 99, 0.08)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
