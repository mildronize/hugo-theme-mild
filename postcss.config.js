const postcssPresetEnv  = require('postcss-preset-env');
// const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 0,
      browsers: 'last 2 versions',
      features: {
        'logical-properties-and-values': false, 
        'prefers-color-scheme-query': false, 
        'gap-properties': false,
        'custom-properties': false,
        'dir-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'color-functional-notation': false,
      }
    }),
    // postcssNested(),
  ]
}
