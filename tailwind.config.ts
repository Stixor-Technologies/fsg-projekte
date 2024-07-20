import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    container: false,
  },
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
        "gt-super-italic": ["var(--font-gt-regular-italic)"],
        "gt-medium": ["var(--font-gt-medium)"],
        "gt-book": ["var(--font-gt-book)"],
      },
      colors: {
        "light-yellow": "#F4EDE4",
        "dark-blue": "#101D40",
        "medium-blue": "#212D4D",
        "light-blue": "#1C2C53",
        brown: "#765534",
        "light-brown": "#AC9379",
        "dark-brown": "#C7B8A6",
        silver: "#C3C3C3",
        gray: "#F2F3F4",
      },
      screens: {
        xs: "440px",
        "3xl": "1700px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "100%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "100%",
            paddingLeft: "7.8125rem",
            paddingRight: "7.8125rem",
          },
          "@screen 4xl": {
            maxWidth: "100%",
            // paddingLeft: "7.8125rem",
            // paddingRight: "7.8125rem",
          },
        },
      });
    },
  ],
};
export default config;
