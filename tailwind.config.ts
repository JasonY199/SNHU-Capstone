import type { Config } from "tailwindcss";

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        'background-global': '#dadee0',
        'background-section': '#000000',

        /* Fonts */
        'font-title': '#000000', // Title font color
        'font-primary': '#55686f', // Primary font color (for important text)
        'font-secondary': '#001424', // Secondary font color
        'font-hero': '#aba944', // Only for hero section text

        /* Nav Links */
        'nav-normal': '#55686f',
        'nav-hover': '#a8aa41',
      },
    },
  },
  plugins: [],
};

export default config;
