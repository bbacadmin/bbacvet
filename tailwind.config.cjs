/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        orange: {
          400: "#fb923c",
        },
        slate: {
          800: "#1e293b",
        },
        gray: {
          200: "#e5e7eb",
          400: "#9ca3af",
          700: "#374151",
        },
        dark: "#0f172a",
        yellow: {
          400: "#facc15",
        },
        // Semantic color palette using OKLCH values
        brand: {
          primary: "oklch(0.627_0.194_149.214)", // Main green - buttons, accents
          secondary: "oklch(0.666_0.179_58.318)", // Gradient secondary green
          dark: "oklch(0.21_0.034_264.665)", // Dark text - headings
          muted: "oklch(0.446_0.03_256.802)", // Medium text - body text
          light: "oklch(0.962_0.044_156.743)", // Light color - on dark backgrounds
          accent: "oklch(0.872_0.01_258.338)", // Muted accent text
          border: "oklch(0.373_0.034_259.733)", // Border color
          surface: "oklch(0.982_0.018_155.826)", // Light surface
          surfaceLight: "oklch(0.987_0.022_95.277)", // Very light surface
          footer: "oklch(0.707_0.022_261.325)", // Footer text
          icon: "oklch(0.448_0.119_151.328)", // Icon colors
          textLight: "oklch(0.527_0.154_150.069)", // Text on light backgrounds
          textMuted: "oklch(0.551_0.027_264.364)", // Muted text variant
          borderLight: "oklch(0.925_0.084_155.995)", // Light border
        },
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "300ms",
      },
    },
  },
  plugins: [],
};
