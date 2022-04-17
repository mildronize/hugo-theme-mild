const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "production",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "../static/assets"),
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
});
