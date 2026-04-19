/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './stories/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false,
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 14px 30px rgba(6, 9, 35, 0.22)',
      },
      borderRadius: {
        panel: '14px',
      },
    },
  },
  plugins: [],
};
