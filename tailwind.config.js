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
        'display-desktop': ['clamp(2.5rem, 8vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-mobile': ['clamp(2rem, 8vw, 3rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h2-desktop': ['clamp(2.5rem, 4vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2-mobile': ['clamp(1.75rem, 4vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'body': ['clamp(16px, 2.5vw, 18px)', { lineHeight: '1.75', letterSpacing: '0' }],
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
          '0%': { opacity: '0', transform: 'translateY(40px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'draw-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'scroll-reveal': 'scroll-reveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slide-in-left': 'slide-in-left 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'ken-burns': 'ken-burns 20s ease-in-out infinite alternate',
        'draw-line': 'draw-line 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
