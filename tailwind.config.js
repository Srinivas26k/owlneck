/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001BB7',
        electric: '#0046FF',
        sunset: '#FF8040',
        cream: '#F5F1DC',
        navy: '#0A1628',
        muted: '#6B7280',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-desktop': ['clamp(3rem, 8vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-mobile': ['3rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h2-desktop': ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2-mobile': ['36px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'body': ['18px', { lineHeight: '1.75', letterSpacing: '0' }],
      },
      scale: {
        '102': '1.02',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-reveal': {
          '0%': { opacity: '0', transform: 'translateY(40px)' }, // Increased distance
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'scroll-reveal': 'scroll-reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', // Smoother easing
      },
    },
  },
  plugins: [],
}
