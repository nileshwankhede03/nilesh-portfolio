/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070a08',
        panel: '#0d120f',
        mint: '#a7f3c5',
        muted: '#929c95',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(132, 255, 184, 0.12)',
      },
    },
  },
  plugins: [],
}
