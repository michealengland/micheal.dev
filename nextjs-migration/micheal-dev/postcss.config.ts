module.exports = {
  plugins: {
    // ORIGINAL CONFIG
    // 'postcss-flexbugs-fixes': {},
    // 'postcss-preset-env': {
    //   autoprefixer: {
    //     flexbox: 'no-2009'
    //   },
    //   stage: 3,
    //   features: {
    //     'custom-properties': false,
    //     'nesting-rules': true
    //   }
    // },
    // tailwindcss: {},
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  }
}