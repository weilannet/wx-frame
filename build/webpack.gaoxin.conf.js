var webpack = require('webpack')
var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
// eval-source-map is faster for development
config.devtool = '#eval-source-map'

// add hot-reload related code to entry chunks


config.output.path = './dev'
config.output.publicPath = './'

config.plugins = (config.plugins || []).concat([
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  //new webpack.optimize.OccurenceOrderPlugin(),
  //new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
  })
])

module.exports = config
