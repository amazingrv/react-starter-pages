const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    client: {
      overlay: true,
    },
    devMiddleware: {
      publicPath: '/',
    },
    port: 9060,
    open: true,
    historyApiFallback: true,
    host: 'localhost',
  },
  stats: 'minimal',
});
