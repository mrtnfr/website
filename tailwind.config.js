/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50:  '#FAF7F2',
          100: '#F2EEE7',
          200: '#E8E2D9',
          300: '#D9D2C7',
          400: '#C4B8AD',
          500: '#A89080',
          600: '#9B8B7E',
          700: '#7D6F67',
          800: '#5A524D',
          900: '#3D3530',
        },
        taupe: {
          DEFAULT: '#A37D6A',
          dark:    '#8B6A5A',
          light:   '#C1A496',
        },
        sage: {
          DEFAULT: '#71A383',
          dark:    '#5F9170',
        },
        text: {
          primary:   '#3D3530',
          secondary: '#7A6F68',
          light:     '#A89080',
        },
      },
      fontFamily: {
        headline: ['"Assistant"', 'sans-serif'],
      },
      screens: {
        desk: '981px',
      },
    },
  },
  plugins: [],
}
