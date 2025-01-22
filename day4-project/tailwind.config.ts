import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)', // Custom background color
        foreground: 'var(--foreground)', // Custom foreground color
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans], // Default sans-serif with Poppins
        inter: ['var(--font-inter)', ...fontFamily.sans],   // Inter font
        roboto: ['var(--font-roboto)', ...fontFamily.sans], // Roboto font
        poppins: ['var(--font-poppins)', ...fontFamily.sans], // Explicit Poppins class
      },
    },
  },
  plugins: [],
};

export default config;