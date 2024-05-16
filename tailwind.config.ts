import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#F7A723",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        body: {
          foreground: "#F4F7FF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        mainBlack: ["Main-Black", "sans-serif"],
        mainBold: ["Main-Bold", "sans-serif"],
        mainExtraBold: ["Main-ExtraBold", "sans-serif"],
        mainExtraLight: ["Main-ExtraLight", "sans-serif"],
        mainLight: ["Main-Light", "sans-serif"],
        mainMedium: ["Main-Medium", "sans-serif"],
        mainRegular: ["Main-Regular", "sans-serif"],
        mainThin: ["Main-Thin", "sans-serif"],
        cairoBlack: ["Cairo-Black", "sans-serif"],
        cairoBold: ["Cairo-Bold", "sans-serif"],
        cairoExtraBold: ["Cairo-ExtraBold", "sans-serif"],
        cairoExtraLight: ["Cairo-ExtraLight", "sans-serif"],
        cairoLight: ["Cairo-Light", "sans-serif"],
        cairoMedium: ["Cairo-Medium", "sans-serif"],
        cairoRegular: ["Cairo-Regular", "sans-serif"],
        cairoSemiBold: ["Cairo-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
