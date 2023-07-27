/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}',
    './src/**/**/**/*.{ts,tsx}',
    './src/**/**/**/**/*.{ts,tsx}',
  ],
  plugins: ['prettier-plugin-tailwindcss'],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
};

