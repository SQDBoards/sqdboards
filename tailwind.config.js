const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.*.{html,js}',
    './tailwind/tailwind.css'
  ],
  theme: {
    extend: {
      keyframes: {
        rotateButtonIn: {
          'to': {transform: 'rotate(360deg)'}
        },
        rotateButtonOut: {
          'to': {transform: 'rotate(-360deg)'}
        }
      }
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ matchUtilities }) {
      matchUtilities({
        'grid-cols-auto': (value) => ({
          'grid-template-columns': 'repeat(' + value + ',auto)'
        }),
        'grid-cols-min': (value) => ({
          'grid-template-columns': 'repeat(' + value + ',min-content)'
        }),
        'grid-rows-auto': (value) => ({
          'grid-template-rows': 'repeat(' + value + ',auto)'
        }),
        'border': (value) => ({
          'border-width': value + 'px'
        }),
        'px-perc': (value) => ({
          'padding-left': value + '%',
          'padding-right': value + '%'
        }),
      })
    })
  ],
}
