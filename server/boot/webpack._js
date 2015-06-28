const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const webpackMiddleware = require("webpack-dev-middleware");
const config = require('../../webpack.config');

module.exports = function(app) {
  app.use(webpackMiddleware(webpack(config), {
    publicPath: 'http://localhost:3000/client/public/',
    contentBase: 'http://localhost:3000',
    // publicPath: config.output.publicPath,
    // headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    historyApiFallback: true,
  }));
};
