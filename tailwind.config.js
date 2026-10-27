/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne:  ["Syne", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // Design-system tokens
        "brand-bg":     "hsl(0, 0%, 6%)",
        "brand-fg":     "hsl(30, 12%, 94%)",
        "brand-coral":  "hsl(8, 92%, 62%)",
        "brand-muted":  "hsl(30, 4%, 58%)",
        "brand-border": "hsl(0, 0%, 16%)",
        "brand-card":   "hsl(0, 0%, 9%)",
        "brand-foot":   "hsl(0, 0%, 4%)",
      },
      animation: {
        marquee:     "marquee 32s linear infinite",
        bounceFast:  "bounce 0.8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
