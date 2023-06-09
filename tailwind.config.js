/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      pacifico: ["Pacifico", "sans-serif"],
      poppins: ['"Poppins"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        bgColor: "#F4F7F9",
        bgCardColor: "#E5F6F0",
        primaryColor: "#EF0B78",
        secondaryColor: "#FE6901",
        primaryColor2: "#26C0B5",
        secondaryColo2: "#41E596",
        gradient1: "rgba(0,0,0,0.4)",
        gradient2: "rgba(0,0,0,0.5)",
      },

      backgroundImage: {
        "hero-bg": "url('../src/assets/bg.jpg')",
        "hero-bg2": "url('../src/assets/bg2.jpg')",
        "hero-bg3": "url('../src/assets/bg3.jpg')",
      },
    },
  },
  plugins: [],
};
