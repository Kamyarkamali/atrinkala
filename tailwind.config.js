/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "rgba(53 95 222)",
        black: "#2A253B",
      },
      fontFamily: {
        sansRegular: "Sans Regular",
        sansBold: "Sans Bold",
        sansFanumRegular: "Sans FanumRegular",
        sansFanumBold: "Sans FanumBold",
      },
      container: {
        center: true,
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1926px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
