import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant Color Palette - Client Approved
        background: '#F5F1DC',  // Cream background instead of white
        foreground: '#1a1a2e',  // Dark text for readability

        // Primary - Vibrant Blue
        primary: {
          DEFAULT: '#0046FF',  // rgb(0, 70, 255)
          foreground: '#ffffff',
        },

        // Secondary - Teal
        secondary: {
          DEFAULT: '#73C8D2',  // rgb(115, 200, 210)
          foreground: '#1a1a2e',
        },

        // Accent - Orange
        accent: {
          DEFAULT: '#FF9013',  // rgb(255, 144, 19)
          foreground: '#ffffff',
        },

        // Supporting Colors
        'navy-premium': '#1a1a2e',  // Darker navy for text (not black)
        'vapor-white': '#F5F1DC',   // Cream (same as background)
        'soft-azure': '#E8F4F8',    // Light teal tint
        'silver-divider': '#d4d1c0', // Cream-tinted divider
        'text-main': '#1a1a2e',
        'text-muted': '#6b6b7d',

        card: {
          DEFAULT: '#ffffff',
          foreground: '#1a1a2e',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#1a1a2e',
        },
        muted: {
          DEFAULT: '#E8F4F8',
          foreground: '#6b6b7d',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#d4d1c0',
        input: '#d4d1c0',
        ring: '#0046FF',
        chart: {
          '1': '#0046FF',  // Primary blue
          '2': '#73C8D2',  // Teal
          '3': '#FF9013',  // Orange
          '4': '#F5F1DC',  // Cream
          '5': '#6b6b7d',  // Muted
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config

