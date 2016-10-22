const conf = require('./gulp.conf');
const path = require('path');

const wpf = require('./wpf-loader')('./webpack-factory');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = require('./webpack-config-extend')({
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      wpf.loader('styles-prod')
    ]
  },
  plugins: [
    wpf.plugin('define-prod-env'),
    wpf.plugin('uglify-js'),
    wpf.plugin('content-hash-css'),
    wpf.plugin('vendor-js')
  ]
});
