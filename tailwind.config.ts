import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        foreground: "#2C2C2C",
        warm: {
          white: "#FAFAF8",
          cream: "#F5F0E8",
          sand: "#E8DDD0",
        },
        sage: {
          DEFAULT: "#8FAF8F",
          light: "#A4C2A4",
        },
        charcoal: {
          DEFAULT: "#2C2C2C",
          light: "#4A4A4A",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        warm: "0 10px 40px -10px rgba(180,160,140,0.15)",
        "warm-hover": "0 20px 40px -10px rgba(180,160,140,0.25)",
      }
    },
  },
  plugins: [],
};
export default config;
