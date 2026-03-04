/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'card-bg': 'var(--color-card-bg)',
        border: 'var(--color-border)',
        'nav-bg': 'var(--color-nav-bg)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        primary: '0 10px 15px -3px rgba(13,148,136,0.4), 0 4px 6px -2px rgba(13,148,136,0.2)',
      },
    },
  },
  plugins: [],
};
