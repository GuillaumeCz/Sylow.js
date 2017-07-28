var path = require('path');

module.exports = {
  entry: {
    sylow: "./src/sylow.js"
  },
    output: {
      path: path.join(__dirname, "lib"),
      filename: "[name].bundle.js"
    },
    module: {
      rules: [
        {
           test: /\.js$/,
           exclude: /(node_modules|bower_components)/,
           use: {
             loader: 'babel-loader',
             options: {
               presets: ['env']
             }
           }
         }
       ]
    }
};
