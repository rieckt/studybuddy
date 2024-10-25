/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f0',
          100: '#fae8df',
          200: '#f5d0be',
          300: '#efb49d',
          400: '#e7866c',
          500: '#de5c3b',
          600: '#cb4728',
          700: '#a93a22',
          800: '#8a3321',
          900: '#722e20',
        },
        warmGray: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};