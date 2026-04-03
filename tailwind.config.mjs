/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          raised: "#f8fafc",
          card: "#f1f5f9",
          hover: "#e2e8f0",
          border: "#e2e8f0",
          "border-light": "#cbd5e1",
        },
        brand: {
          red: "#dc2626",
          "red-hover": "#b91c1c",
          green: "#2d6a4f",
          "green-light": "#f0f7f4",
          "green-hover": "#245c43",
          blue: "#1e40af",
          purple: "#7c3aed",
          amber: "#b45309",
        },
        txt: {
          primary: "#1a1a2e",
          secondary: "#475569",
          muted: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
