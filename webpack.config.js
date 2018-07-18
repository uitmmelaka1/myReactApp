const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.(css|sass|scss)$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpe?g|png|svg|gif)/, loader: 'file-loader' }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    port: 4000
  }
}