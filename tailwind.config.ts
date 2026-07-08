import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        paper: "#FAFAFA",
        "paper-dim": "#F1F1F3",
        slate: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
        },
        line: "#E4E4E7",
        atlas: {
          DEFAULT: "#263186",
          dark: "#1B2263",
          light: "#3D4BB2",
        },
        signal: {
          DEFAULT: "#B91C3C",
          light: "#F4D4DA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseMark: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        pulseMark: "pulseMark 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
