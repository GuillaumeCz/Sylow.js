const path = require('path');
const webpack = require('webpack');
const packageData = require('./package.json');


module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: packageData.babel
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      },
      sourceMap: true
    }),
  ]
};
