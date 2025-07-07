/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'terracotta': {
          50: '#fef7f5',
          100: '#fdeee9',
          200: '#fad5c8',
          300: '#f6b8a1',
          400: '#f19072',
          500: '#ea6947',
          600: '#d8522a',
          700: '#b33e20',
          800: '#92341e',
          900: '#792e1e',
        },
        'cream': {
          50: '#fdfcf9',
          100: '#faf8f3',
          200: '#f4f0e6',
          300: '#ebe5d4',
          400: '#ddd4bd',
          500: '#ccc0a0',
          600: '#b5a688',
          700: '#968770',
          800: '#7a6f5d',
          900: '#665b4e',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'pattern-mandala': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23d8522a\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"8\"/%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"12\"/%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"16\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};