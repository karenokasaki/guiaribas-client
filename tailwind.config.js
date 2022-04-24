module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "super-red": "#780000",
        "bright-red": "#c1121f",
        "bege": "#fdf0d5",
        "super-blue": "#003049",
        "bright-blue": "#669bbc",
      },
      fontFamily: {
        'Poppins': ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },
      },
      plugins: [],
    },
  }
}