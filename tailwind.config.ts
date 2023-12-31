import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { max: '480px' },
      md: { max: '1023px', min: '481px' },
      lg: { max: '1280px', min: '1024px' },
    },
    extend: {
      colors: {
        white: '#FFF',
        grey: '#D8D8D8',
        whitePurple: '#F5F4F9',
        darkPurple: '#5E3DB3',
        blackPurple: '#090C35',
        pinkPurple: '#8765DD',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        darkGray: '#C2C2C2',
        whiteGray: '#E7E7E7',
      },
    },
  },
  plugins: [],
};
export default config;
