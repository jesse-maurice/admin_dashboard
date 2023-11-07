/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      width: {
        '82vw': '82vw',
      },
      height: {
        '90vh':'90vh',
      },
      backgroundImage: {
        'orders': './src/images/gaelle-marcel-Y1kFBWWzOP4-unsplash.jpg'
      }
    },
  },
  plugins: [],
};
