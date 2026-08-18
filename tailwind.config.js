/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#02040A',
          primary: '#F97316',
          secondary: '#8B5CF6',
          accent: '#06B6D4',
          white: '#FFFFFF',
          muted: '#94A3B8',
        },
        dark: {
          base: '#02040A',
          card: 'rgba(10, 14, 26, 0.65)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      backgroundImage: {
        'gradient-orange-purple': 'linear-gradient(135deg, #F97316 0%, #8B5CF6 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(249, 115, 22, 0.15), rgba(139, 92, 246, 0.15), transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulseGlow 6s ease-in-out infinite',
        'grid-float': 'gridFloat 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gridFloat: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-40px)' },
        }
      }
    },
  },
  plugins: [],
};
