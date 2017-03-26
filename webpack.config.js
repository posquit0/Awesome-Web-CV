const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

module.exports = config;
