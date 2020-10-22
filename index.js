const plugin = require('tailwindcss/plugin')
const coolhue = require('coolhue')

const coolhueGradients = plugin(function({ addUtilities }) {
  const { getGradientStyle } = coolhue
  const coolhueKeys = [...Array(60).keys()]
  const coolhueGradients = coolhueKeys.map(key => {
    const num = key + 1;

    return {
      [`.bg-coolhue-${num}`]: { backgroundImage: getGradientStyle(num) }
    }
  })
  
  addUtilities(coolhueGradients)
})

module.exports = coolhueGradients