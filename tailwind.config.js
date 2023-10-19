/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cerapro: ['Cera Pro Medium', 'sans'],
      },
      colors: {
        'vink-white': {
          light: '#F6F6F6',
          DEFAULT: '#FFFFFF',
          dark: '#00000017',
        },
        'vink-purple': {
          light: '#C441CE',
          DEFAULT: '#9940D7',
        },
        'vink-black': {
          light: '#1D1F2C',
          dark: '#000000',
          light_dark: '#0D0D0D',
          DEFAULT: '#2B2B2B',
        },
        'vink-orange': {
          DEFAULT: '#F9522D',
        },
        'vink-yellow': {
          DEFAULT: '#FFA200',
        },
        'vink-sky': {
          DEFAULT: '#95FFE8',
        },
        'vink-green': {
          light: '#00D842',
          DEFAULT: '#1FC114',
          dark:'#065D4D'
        },
        'vink-grey': {
          light: '#00000029',
          semi_light: '#C5C5C5',
          dark: '#7C7C7C',
        },
        'vink-pink': {
          light: '#FF5B9F',
          semi_light: '#E7427E',
          dark: '#FF5B9F',
        },
        'vink-blue': {
          light: '#2623CC',
        },
        'vink-red': {
          light: '#D81100',
        },
      },
      maxWidth: {
        container: '1546px',
      },
    },
  },
  plugins: [],
};
