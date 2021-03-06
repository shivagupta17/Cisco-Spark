var path = require('path'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app/main'),
  generic: path.join(__dirname, 'app/'),
  build: path.join(__dirname, 'dist')
};
process.env.BABEL_ENV = TARGET;

var common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: PATHS.generic
    }, {
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: PATHS.generic
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
