import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rose: {
          principal: '#D4A0A0',
          clair: '#F2E0E0',
        },
        'blanc-creme': '#FFF8F6',
        'noir-elegant': '#1A1A1A',
        'or-luxe': '#C9A84C',
        'gris-doux': '#8C8C8C',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
