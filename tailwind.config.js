/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './templates/**/*.html',
      './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
        colors: {
           'Lumigreen': '#00FD38',
            'Mossy': '#3F4A3C',
            'Sage': '#A2AF9F',
            'Aqualight': '#00E1FF',
            'Cerulean': '#00A8FF',
            'BlueSteel': '#55647E',
            'Custom1': '#121922',
        },
    },
  },
  plugins: [
      require('flowbite/plugin'),
  ],
}

