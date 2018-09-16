const path = require('path')
const webpack = require('webpack')

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
      path.join(__dirname, './src/index.js'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?require_optional(\\|\/)(.+)?/,
      path.join(__dirname, './src/index.js/'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?require_optional(\\|\/)(.+)?/,
      path.join(__dirname, './node-modules/'),
      {}
    )
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
