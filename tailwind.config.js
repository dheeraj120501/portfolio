/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        code: ['"Source Code Pro"', "monospace"],
      },
      colors: {
        primary: {
          light: "#646aff",
          dark: "#00d1c7",
        },
        text: {
          light: "#383838",
          dark: "#f5f5f5",
        },
        bg: {
          light: "#fcfcfc",
          dark: "#1d2c33",
        },
        black: "#383838",
        white: "#f5f5f5",
        grey: "#a7a7a7",
      },
    },
  },
  plugins: [],
};
