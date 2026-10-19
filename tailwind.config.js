/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lma: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          dark: '#0d1b2e',
          navy: '#101f34',
          slate: '#1e293b',
        },
        navy: {
          900: '#0d1b2e',
          800: '#14283f',
          700: '#1b3554',
          600: '#24466b',
        },
        accent: {
          DEFAULT: '#10b981',
          dark: '#059669',
          soft: '#d7f3e7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(13, 27, 46, 0.06)',
        'card': '0 4px 20px -2px rgba(13, 27, 46, 0.08), 0 2px 6px -1px rgba(13, 27, 46, 0.04)',
        'dropdown': '0 10px 30px -5px rgba(13, 27, 46, 0.15)',
        'glow-accent': '0 0 25px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}