const paths = require('../paths.conf');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack-common.conf');
const lot = require('./lot')();
module.exports = merge(base, {
  name: 'dist-config',
  output: {
    path: path.join(process.cwd(), paths.dist),
    filename: '[name]-[hash:7].js'
  },
  module: {
    loaders: [
      lot.loader('styles-prod')
    ]
  },
  plugins: [
    lot.plugin('define-prod-env'),
    lot.plugin('uglify-js'),
    lot.plugin('content-hash-css'),
    lot.plugin('vendor-js')
  ]
});
