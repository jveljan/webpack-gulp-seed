const paths = require('../paths.conf');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack-common.conf');
const ct = require('./map')();
module.exports = merge(base, {
  name: 'dist-config',
  output: {
    path: path.join(process.cwd(), paths.dist),
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      ct.loader('styles-prod')
    ]
  },
  plugins: [
    ct.plugin('define-prod-env'),
    ct.plugin('uglify-js'),
    ct.plugin('content-hash-css'),
    ct.plugin('vendor-js')
  ]
});
