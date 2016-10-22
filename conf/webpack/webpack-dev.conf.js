const paths = require('../paths.conf');
const path = require('path');
const ct = require('./auto/load')();

module.exports = require('./webpack-config-extend')({
  name: 'dev-config',
  debug: true,
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), paths.tmp),
    filename: 'index.js'
  },
  module: {
    loaders: [
      ct.loader('styles-dev')
    ]
  }
});