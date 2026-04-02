import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#E5D8C8",
        sand: "#D6C8B8",
        charcoal: "#23201D",
        ink: "#181615",
        stone: "#5E5852",
        bone: "#F2EBE3",
        rust: "#9F3E24",
        spruce: "#2F4A42",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-eb-garamond)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up-delay": "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
