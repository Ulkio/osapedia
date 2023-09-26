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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-image": "url('/img/bg_image.jpg')",
        "generic-image": "url('/img/generic_image.jpg')",
      },
      backgroundColor: {
        "primary-blue": "#0c283b",
        "secondary-blue": "#134363",
        "primary-yellow": "#F7DF53",
      },
      color: {
        "primary-blue": "#105787",
        "secondary-blue": "#2071A7",
        "primary-yellow": "#F7DF53",
      },
      borderColor: {
        "primary-yellow": "#F7DF53",
      },
    },
  },
  plugins: [],
};
export default config;
