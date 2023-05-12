/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f5f5f5",

          "secondary": "#a8a29e",

          "accent": "#b5c28c",

          "neutral": "#333333",

          "base-100": "#6f4e37",

          "info": "#7BCCEF",

          "success": "#15803d",

          "warning": "#daa520",

          "error": "#6d0e0a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

