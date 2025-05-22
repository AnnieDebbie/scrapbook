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
        sister: ['"Love Ya Like A Sister"', "cursive"],
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
            opacity: 0,
          },
          "60%": {
            transform: "translateY(30px) rotate(10deg)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: 1,
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

        "float-up": {
          "0%": {
            transform: "translateY(200px) scale(0.8)",
            opacity: 0,
          },
          "60%": {
            transform: "translateY(-10px) scale(1.05)",
            opacity: 0.8,
          },
          "100%": {
            transform: "translateY(0px) scale(1)",
            opacity: 1,
          },
        },
        sway: {
          "0%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
          "100%": { transform: "rotate(-8deg)" },
        },

        "leaf-fall": {
          "0%": {
            transform: "translateY(0) translateX(0) rotate(0deg)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "translateY(200px) translateX(60px) rotate(40deg)",
            opacity: "0",
          },
        },

        bloom: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "80%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },

        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        kissPeck: {
          "0%": { transform: "scale(1) rotate(-8deg)", opacity: "1" },
          "30%": { transform: "scale(1.2) rotate(0deg)", opacity: "1" },
          "60%": { transform: "scale(1) rotate(8deg)", opacity: "1" },
        },
        heartFloat: {
          "0%": { opacity: "0", transform: "scale(0.5) translateY(0)" },
          "30%": { opacity: "1", transform: "scale(1.2) translateY(-10px)" },
          "100%": { opacity: "0", transform: "scale(1) translateY(-60px)" },
        },
        "polaroid-drop": {
          "0%": {
            opacity: "0",
            transform: "translateY(-120px) scale(1.15) )",
          },
          "80%": {
            opacity: "1",
            transform: "translateY(16px) scale(1.05) )",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1) )",
          },
        },

        "sticker-pop-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.7) rotate(-8deg)",
          },
          "70%": {
            opacity: "1",
            transform: "scale(1.1) rotate(2deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
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
        "float-up": "float-up 1s ease-out forwards",
        sway: "sway 3s ease-in-out infinite",
        "leaf-fall": "leaf-fall 2.5s cubic-bezier(.4,2,.6,1) forwards",
        bloom: "bloom 1.2s cubic-bezier(.4,2,.6,1) forwards",
        blink: "blink 1s steps(1) infinite",
        "kiss-peck": "kissPeck 1.2s cubic-bezier(.4,2,.6,1) infinite",
        "heart-float": "heartFloat 1.2s 0.6s forwards",
        "polaroid-drop": "polaroid-drop 0.9s cubic-bezier(.4,2,.6,1) forwards",
        "sticker-pop-in":
          "sticker-pop-in 0.8s cubic-bezier(.4,2,.6,1) forwards",
      },
    },
  },
  plugins: [animate],
};
