var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/src/browser.js'
  ],
  output: {
    path: path.join(__dirname, 'client/public/'),
    filename: 'bundle.js',
    publicPath: '/client/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      'common',
      'client/src'
    ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'client/src')
    }]
  }
};
