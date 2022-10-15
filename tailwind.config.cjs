/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "#181325",
        "light-blue": "#7cd3fd",
      },
    },
    spacing: {
      ...defaultTheme.spacing,
      0.25: "0.25rem",
      0.5: "0.5rem",
      0.75: "0.75rem",
      1: "1rem",
      1.25: "1.25rem",
      1.5: "1.5rem",
      2: "2rem",
      2.5: "2.5rem",
      3: "3rem",
      3.5: "3.5rem",
      4: "4rem",
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      mono: ["Rubik", "sans-serif"],
      serif: ["Rubik", "sans-serif"],
    },
    keyframes: {
      "skill-level-75%": {
        "0%": { width: "0%" },
        "25%": { width: "37%" },
        "50%": { width: "75%" },
        "100%": { width: "75%" },
      },
      "skill-level-50%": {
        "0%": { width: "0%" },
        "25%": { width: "25%" },
        "50%": { width: "50%" },
        "100%": { width: "50%" },
      },
      opacify: {
        "0%": { opacity: "0" },
        "25%": { opacity: "0.2" },
        "50%": { opacity: "0.5" },
        "75%": { opacity: "0.7" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      "skill-level-75%": "skill-level-75% 1.4s linear forwards",
      "skill-level-50%": "skill-level-50% 1.4s linear forwards",
      opacify: "opacify 1s ease-in",
    },
  },
  plugins: [],
};
