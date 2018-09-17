const path = require('path')
const webpack = require('webpack')
var StringReplacePlugin = require("string-replace-webpack-plugin");
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  plugins: [
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, './src/index.js'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?mongoose(\\|\/)(.+)?/,
      path.join(__dirname, './node_modules/'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?lib(\\|\/)(.+)?/,
      path.join(__dirname, './node_modules/mongoose/'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?mongodb(\\|\/)(.+)?/,
      path.join(__dirname, './node-modules/mongoose/node_modules/'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?mongodb-core(\\|\/)(.+)?/,
      path.join(__dirname, './node-modules/'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?require_optional(\\|\/)(.+)?/,
      path.join(__dirname, './node-modules/'),
      {}
    ),
    new StringReplacePlugin()
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': '../../.'
    }
  }
}
