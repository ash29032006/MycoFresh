/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          900: '#0F281E', // Darker forest
          800: '#1A3C34', // Deep forest green
          700: '#2D4F46', 
          600: '#407A68',
          500: '#569C85',
          400: '#6EBFA3',
          300: '#8EDEC6',
          200: '#B4EBD9',
          100: '#E6F4F1', // Very light mint
          50: '#F5FDFB',
        },
        earth: {
          900: '#3E3228',
          800: '#5C4D3F',
          700: '#7D6B59',
          600: '#9E8B76',
          500: '#C2B09A',
          400: '#D9C9B6',
          300: '#E8DCCE',
          200: '#F0EBE6', // Warm grey/beige
          100: '#F9F7F5', // Off-white/cream background
          50: '#FDFCFB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
