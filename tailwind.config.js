/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#6A44E8",
        "light-purple": "#F3F0FF",
        "dark-text": "#1E1E1E",
        "light-text": "#6B7280",
      },
      fontFamily: {
        body: ["var(--font-family-body)"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animationDelay: {
        0: "0s",
        400: "400ms",
        1000: "1s",
        2000: "2s",
      },
    },
  },
  plugins: [],
};
