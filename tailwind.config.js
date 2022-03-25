module.exports = {
  content: ["./src/app/*.*.{html,ts}", "./src/app/**/*.*.{html,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Nunito", "sans-serif"]
    },
    screens: {
      xs: "330px",
      sm: "640px",
      md: "768px",
      lg: "1024px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};
