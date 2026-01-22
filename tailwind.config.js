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
        display: ['Inter', 'sans-serif'], // Or SF Pro Display if available locally, fallback to Inter
      },
      fontSize: {
        'display-desktop': ['72px', '1.1'],
        'display-mobile': ['48px', '1.1'],
        'h2-desktop': ['56px', '1.2'],
        'h2-mobile': ['36px', '1.2'],
        'body': ['18px', '1.7'],
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
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'scroll-reveal': 'scroll-reveal 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
}
