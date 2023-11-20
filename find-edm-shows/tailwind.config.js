const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
       height: {
         '390': '390px',
         '567': '567px'
       },

       width: {
        'w-7xl' : '80rem'
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
