/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: "#FBFBFA",
        linen: "#F7F7F5",
        charcoal: "#1C1C1E",
        ink: "#121212",
        "dark-bg": "#121212",
        "dark-panel": "#18181B",
        "dark-text": "#E4E4E7",
        "dark-muted": "#A1A1AA",
        "dark-border": "#27272A",
        "dark-green": "#2E5E4E",
        "dark-green-soft": "#1B3A30",
        borderSoft: "#E7E5DD",
        sand: "#F3F3EE",
      },
      fontFamily: {
        display: ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        soft: "0 4px 20px -6px rgba(28, 28, 30, 0.06)",
        card: "0 8px 30px -10px rgba(28, 28, 30, 0.08)",
        dark: "0 20px 60px -15px rgba(18, 18, 18, 0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marqueeReverse 25s linear infinite",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}