/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './public/*.html' // optional, only needed if you use Tailwind in raw HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

