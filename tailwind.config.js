/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
      xxxl: "1600px",
      // => @media (min-width: 1600px) { ... }
    },
    extend: {
      fontFamily: {
        // Set up the custom fonts with their Tailwind utility names
        body: ["Inter", "sans-serif"],
        title: ["DM Sans", "sans-serif"],
        icon: ["remixicon"],
      },

      colors: {
        colorPurpleLight: "#E5ABF3",
        colorGreen: "#0C9347",
        colorGreenLight: "#A0F7BD",
        colorRed: "#FF5E87",
        colorYellow: "#FFC900",
        colorGrey: "#F9F9FA",
        colorGreyDark: "#747474",
        colorGreyDarkLight: "#DBDBDB",
        colorBorder: "#EAEDF0",
        // Text Color
        colorTextTitle: "#0E0E0E",
        colorTextBody: "#3C3C3C",
      },

      boxShadow: {
        "custom-1": "0px 4px 80px 0px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
