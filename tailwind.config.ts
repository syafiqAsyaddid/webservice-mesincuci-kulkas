import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5F9FD',
          100: '#EAF3FB',
          600: '#2677B8',
          700: '#1D5F99',
          800: '#174A7E',
          900: '#12345A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F8FAFC',
          tint: '#F1F5F9',
        },
        text: {
          DEFAULT: '#172B3A',
          muted: '#526574',
        },
        border: {
          DEFAULT: '#E2E8F0',
        },
        status: {
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
        focus: '#0B76B7',
        whatsapp: {
          DEFAULT: '#10B981',
          dark: '#059669',
          light: '#ECFDF5',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
      },
      maxWidth: {
        container: '1160px',
      },
      borderRadius: {
        card: '14px',
        button: '10px',
        badge: '8px',
      },
      boxShadow: {
        card: '0 8px 30px -4px rgba(18, 52, 90, 0.05), 0 2px 6px -1px rgba(18, 52, 90, 0.03)',
        hover: '0 16px 36px -6px rgba(18, 52, 90, 0.09), 0 4px 12px -2px rgba(18, 52, 90, 0.04)',
        whatsapp: '0 4px 14px 0 rgba(16, 185, 129, 0.28)',
        'whatsapp-hover': '0 8px 20px 0 rgba(16, 185, 129, 0.35)',
        ghost: '0 2px 8px 0 rgba(18, 52, 90, 0.04)',
        soft: '0 10px 30px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
