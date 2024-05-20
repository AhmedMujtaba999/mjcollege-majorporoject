/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg': '#070F2B',
        'custom-grey': '#535C91',
        'custom-purple': '#9290C3'
      },
      textColor: {
        'custom': '#1B1A55',
      }
    },
  },
  plugins: [],
}