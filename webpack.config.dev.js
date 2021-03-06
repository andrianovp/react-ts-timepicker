const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: path.join(__dirname, "./src/TimePicker.tsx"),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    port: 3001,
    writeToDisk: true
  },
};
