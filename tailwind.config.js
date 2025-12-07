/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        neon: {
          cyan: '#06b6d4',
          fuchsia: '#d946ef',
          amber: '#f59e0b',
          purple: '#8b5cf6'
        },
        dark: {
          bg: '#020617', // Slate 950
          card: '#0f172a', // Slate 900
          text: '#f8fafc',
          muted: '#94a3b8'
        }
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 2px rgba(217, 70, 239, 0.6)) drop-shadow(0 0 8px rgba(217, 70, 239, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.6)) drop-shadow(0 0 12px rgba(6, 182, 212, 0.4))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}