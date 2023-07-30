/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/**/*.{ts,tsx}',
    './src/**/**/**/*.{ts,tsx}',
    './src/**/**/**/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    require('@headlessui/tailwindcss'),
    'prettier-plugin-tailwindcss'
  ],
  theme: {
    extend:
    {
      flex: {
        '2': '2 1 0%',
        '3': '3 1 0%',
        '4': '4 1 0%',
        '5': '5 1 0%',
        '6': '6 1 0%',
        '7': '7 1 0%',
        '8': '8 1 0%',
        '9': '9 1 0%',
        '10': '10 1 0%',
      }, flexGrow: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10,'

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
};

