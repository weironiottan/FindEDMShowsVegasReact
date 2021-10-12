const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': '26rem',
        '105': '28rem',
        '110': '32rem',
        '115': '34rem',
        '120': '36rem',
      },
      dropShadow: ['hover'],
      backgroundImage: {
        // 'hero-image': "url('./src/images/edm-hero-image.jpg')",
       },
       minWidth: {
        '1/3': '33.333333%',

       },
       maxWidth: {
        '2/5': '40%',

       },
       colors: {
         ...colors,
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
