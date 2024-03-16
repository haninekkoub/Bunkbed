import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outreque: ["var(--outreque)"],
        SfPro: ["var(--sfPro)"],
      },
      fontSize: {
        "8xl": "5.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
