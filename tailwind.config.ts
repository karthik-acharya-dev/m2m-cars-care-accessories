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
        background: "var(--background)",
        foreground: "var(--foreground)",
        racing: {
          50: "#fff5ed",
          100: "#ffe8d6",
          200: "#ffd0ad",
          300: "#ffb07a",
          400: "#ff8238",
          500: "#ff5500", // Brand Signature Racing Orange
          600: "#e64300",
          700: "#be3300",
          800: "#972905",
          900: "#7a2509",
        },
        obsidian: {
          DEFAULT: "#090a0c",
          50: "#1a1d24",
          100: "#14171d",
          200: "#0f1115",
          300: "#0c0d10",
          card: "#12151b",
          border: "#232834",
          muted: "#7c8496",
        },
        warm: {
          white: "#faf9f6",
          cream: "#f4f2ec",
          dim: "#8e95a5",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        display: ["'Outfit'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        heading: ["'Outfit'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        mono: ["'Space Grotesk'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.14em",
      },
      boxShadow: {
        premium: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        orangeGlow: "0 0 35px -5px rgba(255, 85, 0, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
