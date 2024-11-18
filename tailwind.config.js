/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          from: '#e89510', // purple-400
          to: '#DB2777', // pink-600
          DEFAULT: '#f79355'
        },
        light: {
          bg: '#FFFFFF',
          card: '#F3F4F6',
          text: '#1F2937',
          muted: '#6B7280'
        },
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          lighter: '#2A2A2A',
          text: '#FFFFFF',
          muted: '#9CA3AF'
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
      },
    },
  },
  plugins: [],
};