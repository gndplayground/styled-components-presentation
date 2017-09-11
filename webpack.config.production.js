const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],

  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/styled-components-presentation/',
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: 'img/[name]-[hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
    }),
  ],
};
