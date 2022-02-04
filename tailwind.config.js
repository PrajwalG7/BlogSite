const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/*.jsx", "./components/*.jsx"],
  theme: {
    extend: {
      margin: {
        "70px": "70px",
      },
    },
    screens: {
      ...defaultTheme.screens,
      sm: "51px",
      md: "766px",
      lg: "917px",
    },
  },
  plugins: [],
};
