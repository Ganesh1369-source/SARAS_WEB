/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#E8F4FC',
          100: '#C5E1F9',
          200: '#90C5F4',
          300: '#5BA9EF',
          400: '#3293E9',
          500: '#2B85C6',
          600: '#1F649A',
          700: '#15476C',
          800: '#0B283E',
          900: '#051220'
        },
        secondary: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        accent: {
          50: '#EAEAEF',
          100: '#C6C7D4',
          200: '#9EA0B8',
          300: '#75789C',
          400: '#585B87',
          500: '#3A3F73',
          600: '#2F335C',
          700: '#242844',
          800: '#1A1C2D',
          900: '#0F1017'
        },
        dark: '#101820',
      },
      backgroundImage: {
        'circuit-pattern': "url('/src/assets/circuit-bg.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #2B85C6 0%, #3293E9 100%)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(50, 147, 233, 0.5)',
        'glow-sm': '0 0 8px rgba(50, 147, 233, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};