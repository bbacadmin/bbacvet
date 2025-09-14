/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // SEMANTIC COLOR SYSTEM (Replaces OKLCH values)
      colors: {
        // Brand Primary Colors
        primary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        // Semantic Text Colors
        text: {
          primary: "#1e293b", // slate-800 (main headings)
          secondary: "#64748b", // slate-500 (body text)
          muted: "#94a3b8", // slate-400 (subtle text)
          accent: "#10b981", // emerald-500 (links/highlights)
          light: "#f1f5f9", // slate-100 (light backgrounds)
          inverse: "#ffffff", // white (on dark backgrounds)
        },
        // Semantic Background Colors
        bg: {
          primary: "#ffffff", // white
          secondary: "#f8fafc", // slate-50
          tertiary: "#f1f5f9", // slate-100
          dark: "#0f172a", // slate-900
          accent: "#ecfdf5", // emerald-50
        },
        // Legacy colors (for gradual migration)
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
      },
      // CONSISTENT SPACING SCALE (4px increments)
      spacing: {
        xs: "0.25rem", // 4px
        sm: "0.5rem", // 8px
        md: "0.75rem", // 12px
        lg: "1rem", // 16px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "2rem", // 32px
        "4xl": "2.5rem", // 40px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
        "7xl": "5rem", // 80px
        "8xl": "6rem", // 96px
      },
      // TYPOGRAPHY SCALE with consistent line heights
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
      },
      // BORDER RADIUS SCALE
      borderRadius: {
        none: "0",
        sm: "0.125rem", // 2px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
        full: "9999px",
      },
      // ICON SIZES (Common dimensions)
      height: {
        "icon-xs": "0.75rem", // 12px
        "icon-sm": "1rem", // 16px
        "icon-md": "1.25rem", // 20px
        "icon-lg": "1.5rem", // 24px
        "icon-xl": "2rem", // 32px
      },
      width: {
        "icon-xs": "0.75rem", // 12px
        "icon-sm": "1rem", // 16px
        "icon-md": "1.25rem", // 20px
        "icon-lg": "1.5rem", // 24px
        "icon-xl": "2rem", // 32px
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
