import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "proxima-thin": ["var(--font-proxima-thin)"],
        proxima: ["var(--font-proxima-regular)"],
        "proxima-semibold": ["var(--font-proxima-semibold)"],
        "proxima-bold": ["var(--font-proxima-bold)"],
        "gt-super": ["var(--font-gt-regular)"],
        "gt-medium": ["var(--font-gt-medium)"],
        "gt-book": ["var(--font-gt-book)"],
      },
      colors: {
        "light-yellow": "#F4EDE4",
        "dark-blue": "#101D40",
        "medium-blue": "#212D4D",
        "light-blue": "#1C2C53",
        brown: "#765534",
        "dark-brown": "#C7B8A6",
        silver: "#C3C3C3",
        gray: "#F2F3F4",
      },
    },
  },
  plugins: [],
};
export default config;
