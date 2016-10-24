const paths = require('../paths.conf');
const path = require('path');
const lot = require('./lot')();
const merge = require('webpack-merge');
const base = require('./webpack-common.conf');
module.exports = merge(base, {
  name: 'dev-config',
  debug: true,
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), paths.tmp),
    filename: '[name]-[hash:7].js'
  },
  module: {
    loaders: [
      lot.loader('styles-dev')
    ]
  }
});