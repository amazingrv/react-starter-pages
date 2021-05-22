const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  target: 'browserslist',
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    client: {
      overlay: false,
    },
    devMiddleware: {
      publicPath: '/',
    },
    port: 9060,
    open: false,
    historyApiFallback: true,
    host: 'localhost',
  },
  stats: 'minimal',
});
