const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  entry: {
    index: './client/src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './client/dist',
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin([
      'client/dist/*'
    ]),
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
      filename: './index.html'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'//defaults to process.env.NODE_ENV being equal to 'localhost' if no environment variable for NODE_ENV exists
    }),
    /*new BundleAnalyzerPlugin()*/
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'client/dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [/client/],
        exclude: [/node_modules/, /server/],
        use: {loader: 'babel-loader'}
      },
      {
        test: /\.html$/,
        use: [{loader: 'html-loader'}]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]//end of rules
  }
};
