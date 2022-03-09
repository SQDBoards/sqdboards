module.exports = {
  content: [
    "./src/app/*.*.{html,js}",
    "./src/app/**/*.*.{html,js}",
    "./src/app/**/**/*.*.{html,js}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Nunito", "sans-serif"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("kutty")
  ]
};
