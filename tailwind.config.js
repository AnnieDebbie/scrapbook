const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        none: "none",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-tr":
          "linear-gradient(to top right, var(--tw-gradient-stops))",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-br":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
        "gradient-to-bl":
          "linear-gradient(to bottom left, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-tl":
          "linear-gradient(to top left, var(--tw-gradient-stops))",
        "gradient-166": "linear-gradient(24deg, var(--tw-gradient-stops))",
        "gradient-94": "linear-gradient(94deg, var(--tw-gradient-stops))",
        "gradient-180": "linear-gradient(180deg, var(--tw-gradient-stops))",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        handwritten: ['"Patrick Hand"', "cursive"],
        akaya: ['"Akaya Kanadaka"', "system-ui"],
      },

      keyframes: {
        "polaroid-entry": {
          "0%": { opacity: 0, transform: "translateY(-50px) rotate(-5deg)" },
          "100%": { opacity: 1, transform: "translateY(0) rotate(-2deg)" },
        },
        "tape-drop": {
          "0%": { opacity: 0, transform: "translateY(-30px) scale(1.1)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },

        "fly-across": {
          "0%": { transform: "translateX(-100%) rotate(0deg)" },
          "50%": { transform: "translateX(50vw) rotate(5deg)" },
          "100%": { transform: "translateX(100vw) rotate(0deg)" },
        },

        "drop-in": {
          "0%": {
            transform: "translateY(-200px) rotate(-15deg)",
            opacity: "0",
          },
          "60%": {
            transform: "translateY(30px) rotate(10deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(0) rotate(0deg)",
          },
        },

        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "transparent-fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.7 },
        },

        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2)" },
          "50%": { transform: "scale(0.9)" },
          "75%": { transform: "scale(1.1)" },
        },
        "page-flip": {
          "0%": {
            transform: "rotateY(0deg)",
            transformOrigin: "left",
            opacity: 1,
          },
          "100%": {
            transform: "rotateY(-180deg)",
            transformOrigin: "left",
            opacity: 0,
          },
        },
        "page-unflip": {
          "0%": {
            transform: "rotateY(-180deg)",
            transformOrigin: "left",
            opacity: 0,
          },
          "100%": {
            transform: "rotateY(0deg)",
            transformOrigin: "left",
            opacity: 1,
          },
        },
      },
      animation: {
        "polaroid-entry": "polaroid-entry 1s ease-out forwards",
        "tape-drop": "tape-drop 0.5s ease-out forwards",
        "fly-across": "fly-across 5s ease-in-out infinite",
        "drop-in": "drop-in 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "transparent-fade-in": "transparent-fade-in 1s ease-out forwards",
        heartbeat: "heartbeat 1.2s ease-in-out infinite",
        "page-flip": "page-flip 1s ease-in-out forwards",
        "page-unflip": "page-unflip 1s ease-in-out forwards",
      },
    },
  },
  plugins: [animate],
};
