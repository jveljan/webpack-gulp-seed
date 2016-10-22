const conf = require('../conf');
const path = require('path');

const wpf = require('./wpf-loader')('./webpack-factory');

module.exports = require('./webpack-config-extend')({
  name: 'dev-config',
  debug: true,
  devtool: 'source-map',
  'display-error-details': true, 
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  module: {
    loaders: [
      wpf.loader('styles-dev')
    ]
  }
});