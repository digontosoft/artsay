/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        straightlerOblique: ['StraightlerOblique', 'sans-serif'],
        straightlerRegular2: ['StraightlerRegular2', 'sans-serif'],
        straightlerRegular22: ['StraightlerRegular22', 'sans-serif'],
        straightlerRegular23: ['StraightlerRegular23', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

