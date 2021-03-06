module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transitionDuration: ["hover", "focus"],
      overflow: ["hover", "focus"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
