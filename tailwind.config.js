/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2781FF',
        secondary: '#0970FF',
        accent: '#172DF7',
        blue: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c1d0ff',
          300: '#a3b9ff',
          400: '#849fff',
          500: '#5271FF',
          600: '#425acc',
          700: '#344599',
          800: '#263066',
          900: '#181b33'
        }
      }
    },
  },
  plugins: [],
};
