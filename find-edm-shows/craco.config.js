// craco.config.js
// module.exports = {
//     style: {
//       postcss: {
//         plugins: [
//           require('tailwindcss'),
//           require('autoprefixer'),
//         ],
//       },
//     },
//   }
/* eslint-disable */
const tailwindcss = require("tailwindcss");

module.exports = {
    style: {
        postcssOptions: {
            plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')]
        }
    }
};
