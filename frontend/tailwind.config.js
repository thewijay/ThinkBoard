/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          900: '#1E3A8A',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'light',
      'dark',
      'forest',
      {
        mytheme: {
          primary: '#3B82F6',
          secondary: '#1E40AF',
          accent: '#60A5FA',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
        },
      },
    ],
  },
}
