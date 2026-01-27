/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001BB7', // Trust Blue
        electric: '#0046FF', // Authority Blue
        sunset: '#FF8040', // Energy Orange
        cream: '#F5F1DC', // Warm Cream
        navy: '#0A1628', // Deep Navy
        muted: '#6B7280', // Support Gray
        white: '#FFFFFF', // Pure White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'], // Using Inter Black where needed
        mono: ['JetBrains Mono', 'monospace'], // For technical/code
      },
      fontSize: {
        'display-desktop': ['72px', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-mobile': ['48px', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '900' }],
        'body': ['18px', { lineHeight: '1.75', letterSpacing: '0.01em', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.5', letterSpacing: '0.1em', fontWeight: '500', textTransform: 'uppercase' }],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow-electric': '0 0 20px rgba(0, 70, 255, 0.3)',
        'glow-sunset': '0 0 20px rgba(255, 128, 64, 0.3)',
      },
      backgroundImage: {
        'gradient-mesh': 'radial-gradient(at 0% 0%, hsla(223,100%,50%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,100%,36%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(22,100%,63%,1) 0, transparent 50%)',
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
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-10px)' },
          '40%, 80%': { transform: 'translateX(10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'scroll-reveal': 'scroll-reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slide-in-left': 'slide-in-left 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'ken-burns': 'ken-burns 20s ease-in-out infinite alternate',
        'draw-line': 'draw-line 1.5s ease-out forwards',
        'shake': 'shake 0.5s ease-in-out',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
