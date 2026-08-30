/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#0f0f1a',
          200: '#141425',
          300: '#1a1a2e',
          400: '#22223a',
        },
        accent: {
          indigo: '#6366f1',
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          emerald: '#10b981',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
      },
    },
  },
  plugins: [],
};
