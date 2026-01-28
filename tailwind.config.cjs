/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB',
        'primary-soft': '#3B82F6',
        'primary-dark': '#0A2558',
        'navy-premium': '#0A1628',
        'vapor-white': '#F8FAFC',
        'soft-azure': '#F0F9FF',
        'glass-border': 'rgba(255, 255, 255, 0.6)',
        'silver-divider': '#E2E8F0',
        'text-main': '#0F172A',
        'text-muted': '#64748B',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'soft-xl': '0 20px 40px -10px rgba(10, 22, 40, 0.06)',
        'glow': '0 0 20px rgba(37, 99, 235, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
