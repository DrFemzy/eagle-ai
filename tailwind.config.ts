import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "3xl": { max: "1900px" },
      "2xl": { max: "1500px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        eagleHighlight: "var(--eagleHighlight)",
      },
      backgroundImage: {
        pryLinearGradient: "var(--pryLinearGradient)",
        heroBg: "url(/pngs/heroBg.png)",
        mobileHeroBg: "url(/pngs/mobileHeroBg.png)",
        inputBg: "rgba(255, 255, 255, 0.20)",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "21/9": "21 / 9",
        square: "1 / 1",
        logo: "2.39631 / 2.1875",
        textLogo: "11.837 / 1.21294",
        desktopPhone: "26.61969 / 51.09381",
        mobilePhone: "21.875 / 43.375",
        era: "21.875 / 16.95041",
        dividends: "21.875 / 20.25",
      },
    },
  },
  plugins: [],
} satisfies Config;
