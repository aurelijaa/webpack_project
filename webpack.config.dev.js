const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'biuld'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
      {test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new MiniCssExtractPlugin({filename: 'index.bundle.css'}),
  ],
  mode: 'development',
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000
  }
};
