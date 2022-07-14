const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, { mode }) => ({
  mode,
  entry: path.resolve(__dirname, 'script.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      template: path.resolve(__dirname, 'search.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'selections.html',
      template: path.resolve(__dirname, 'selections.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'auth.html',
      template: path.resolve(__dirname, 'auth.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
})
