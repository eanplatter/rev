var dotenv = require('dotenv').load()

var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPlugin = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  hash: true,
  filename: 'index.html',
  inject: 'body'
})
var HotReloader = new webpack.HotModuleReplacementPlugin()

var DefinePlugin = new webpack.DefinePlugin({
  __GITHUB_TOKEN__: JSON.stringify(process.env.GITHUB_TOKEN)
})

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/entry.js'
  ],
  output: {
    path: 'dist',
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel',
        include: __dirname + '/app'
      },
      {
        test: /omicron/,
        loader: 'react-hot!babel',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    root: __dirname,
    moduleDirectories: [
      'node_modules',
      '.',
    ],
    alias: {
      omicron: __dirname + '/../omicron/app/Omicron'
    }
  },
  plugins: [
    DefinePlugin,
    HTMLWebpackPlugin,
    HotReloader,
  ],
  devServer: {
    contentBase: __dirname + '/dist',
    hot: true,
    historyApiFallback: true,
  }
}
