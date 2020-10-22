const coolhue = require('./index')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
  },
  variants: {},
  plugins: [coolhue],
}
