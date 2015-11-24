var path = require('path'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app/main'),
  styles: path.join(__dirname, 'app/'),
  build: path.join(__dirname, 'dist')
};

var common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: PATHS.styles
    }]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({ title: 'Webpack React Starter' })
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: 3030
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
