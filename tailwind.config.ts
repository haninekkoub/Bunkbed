import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "4xl": "1920px",
      },
      fontFamily: {
        Outreque: ["var(--outreque)"],
        SfPro: ["var(--sfPro)"],
      },
      fontSize: {
        "8xl": "5.75rem",
      },
      keyframes: {
        herobackground: {
          "0%": {
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 90% 14%, 75% 18%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 36% 43%, 22% 66%, 0 66%, 17.9% 100%, 34% 87%, 76.1% 97.7%, 74.1% 44.1%)",
          },
          "50%": {
            clipPath:
              "polygon(87% 76%, 100% 70%, 100% 53%, 91% 45%, 81% 38%, 72.5% 32.5%, 62% 28%, 59% 39%, 49% 37%, 36% 43%, 18% 35%, 0 52%, 9% 72%, 34% 71%, 54% 100%, 73% 79%)",
          },
          "100%": {
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 90% 14%, 75% 18%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 36% 43%, 22% 66%, 0 66%, 17.9% 100%, 34% 87%, 76.1% 97.7%, 74.1% 44.1%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
