const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'production',
  devtool: false,
   output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'static/js'),
  },
})