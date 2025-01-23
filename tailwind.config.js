/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "robo-mono": ["Roboto Mono", "monospace"],
        lexend: ["Lexend", "sans-serif"],
        inter: ["Inter", "serif"],
        quicksand: ["Quicksand", "serif"],
      },
      colors: {
        pgreen: "#a6d490",
        txtwhite: "#ede7e3",
        txtgrey: "##afbcc6",
        pgray: "#595959"
      },
      ///////----////////
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
