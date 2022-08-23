/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        myGray: "#1B1A17",
        myYellow: "#F0A500",
        myOrange: {
          DEFAULT: "#E45826",
          light: "#E9835F",
          dark: "#B44219",
        },
        mySand: "#E6D5B8",
        mySalmon: "#fccab7",
      },
    },
    fontFamily: {
      myTitle: ["Roboto Condensed", "sans-serif"],
      myHeading: ["Athiti", "sans-serif"],
      myBody: ["Telex", "sans-serif"],
    },
  },
  plugins: [],
};
