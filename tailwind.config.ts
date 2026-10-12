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
          muted: '#F5F7F9',
        },
        text: {
          DEFAULT: '#172B3A',
          muted: '#526574',
        },
        border: {
          DEFAULT: '#D8E2EA',
        },
        status: {
          success: '#18794E',
          warning: '#8A5700',
          danger: '#B42318',
        },
        focus: '#0B76B7',
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        },
      },
      maxWidth: {
        container: '1160px',
      },
      borderRadius: {
        card: '14px',
        button: '10px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(18, 52, 90, 0.06), 0 1px 2px -1px rgba(18, 52, 90, 0.04)',
        hover: '0 4px 12px 0 rgba(18, 52, 90, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
