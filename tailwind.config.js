/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-brown': {
          dark: '#543310',
          medium: '#74512D',
          light: '#AF8F6F',
        },
        'custom-gray': '#D9D9D9',
        'custom-cream': '#F8F4E1',
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ['32px', { lineHeight: '1.2' }],
        h2: ['24px', { lineHeight: '1.2' }],
        h3: ['20px', { lineHeight: '1.2' }],
        para: ['14px', { lineHeight: '1.5' }],
        small: ['12px', { lineHeight: '1.5' }],
      },
      fontWeight: {
        extrabold: '800',
        bold: '700',
        semibold: '600',
      },
    },
  },
  plugins: [],
};
