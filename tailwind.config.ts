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
      "2xl": { max: "1440px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        pryLinearGradient: "var(--pryLinearGradient)",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "21/9": "21 / 9",
        square: "1 / 1",
        logo: "2.39631 / 2.1875",
        textLogo: "11.837 / 1.21294",
      },
    },
  },
  plugins: [],
} satisfies Config;
