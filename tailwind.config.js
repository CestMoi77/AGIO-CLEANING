/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BRANDKLEUREN - pas hier aan voor andere huisstijl
        primary: {
          50:  '#eff8ff',
          100: '#dbeffe',
          200: '#bfe3fd',
          300: '#93d1fb',
          400: '#60b7f7',
          500: '#3b9df2',
          600: '#1e7be6',
          700: '#1663cc',
          800: '#1851a6',
          900: '#1a4583',
          950: '#142b4f',
        },
        accent: {
          50:  '#f0fdf9',
          100: '#ccfbef',
          200: '#99f5df',
          300: '#5eead0',
          400: '#2dd4bc',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
