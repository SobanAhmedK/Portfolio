/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounceFast: "bounce 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
