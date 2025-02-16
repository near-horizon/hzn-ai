/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['FK Grotesk', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 500, // Use medium weight for bold
        semibold: 500, // Use medium weight for semibold
      },
      colors: {
        black: '#000000',
        'custom-green': '#00ec97',
        'custom-purple': '#9696fe',
        'custom-light-purple': '#9797ff',
        white: '#ffffff',
      },
      inset: {
        '15': '15%',
        '35': '35%',
      },
      translate: {
        '15': '15%',
        '35': '35%',
      },
    },
  },
  plugins: [],
}