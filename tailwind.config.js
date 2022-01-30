const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/*.jsx", "./components/*.jsx"],
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
      sm: "51px",
      md: "917px",
      lg: "766px",
    },
  },
  plugins: [],
};
