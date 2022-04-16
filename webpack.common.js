module.exports = {
  entry: "./src/js/index.ts",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // Determine how modules within the project are treated
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
          {loader: 'postcss-loader', options: {sourceMap: true}},
        ],
      },
    ],
  },
};
