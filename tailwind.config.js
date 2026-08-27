/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF3EA",
        "cream-deep": "#F5E7D8",
        paper: "#FFFDF9",
        rose: {
          DEFAULT: "#E8899A",
          light: "#F4C6CE",
          deep: "#C65D72",
        },
        peach: "#F3A87E",
        ink: "#4A3B36",
        gold: "#D9A94E",
      },
      fontFamily: {
        hand: ["Caveat", "cursive"],
        marathi: ["'Noto Sans Devanagari'", "Poppins", "sans-serif"],
        body: ["Poppins", "'Noto Sans Devanagari'", "sans-serif"],
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(6deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: 0.2, transform: "scale(0.8)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
      },
      animation: {
        float: "floatY 6s ease-in-out infinite",
        floatSlow: "floatSlow 4s ease-in-out infinite",
        sparkle: "sparkle 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
