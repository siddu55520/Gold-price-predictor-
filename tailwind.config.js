/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#D4AF37', // Primary gold
          600: '#A68A2A',
          700: '#79651F',
          800: '#4D4013',
          900: '#262008',
        },
        navy: {
          50: '#E6ECEF',
          100: '#CCD9DF',
          200: '#99B3BF',
          300: '#668D9F',
          400: '#33677F',
          500: '#1A2C42', // Primary navy
          600: '#152335',
          700: '#101A28',
          800: '#0A111A',
          900: '#05080D',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FCFCFA',
          200: '#F9F9F5',
          300: '#F7F7F0',
          400: '#F5F5F0', // Primary cream
          500: '#EAEAE0',
          600: '#D5D5C4',
          700: '#C0C0A8',
          800: '#ABAB8C',
          900: '#969670',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};