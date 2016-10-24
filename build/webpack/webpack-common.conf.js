
const autoprefixer = require('autoprefixer');

const paths = require('../paths.conf');
const lot = require('./lot')();

module.exports = {
  name: 'common-config',
  module: {
    preLoaders: [
      lot.loader('eslint'),
      lot.loader('tslint')
    ],
    loaders: [
      lot.loader('json'),
      lot.loader('ts'),
      lot.loader('html'),
      lot.loader('fonts', 'assets/fonts'),
      lot.loader('images', 'assets/images')
    ]
  },
  plugins: [
    lot.plugin('occurrence-order'),
    lot.plugin('no-errors'),
    lot.plugin('html', paths.src + '/index.html')
  ],
  debug: false,
  postcss: () => [autoprefixer],
  resolve: {
    extensions: ['', '.js', '.ts'],
    alias: {
      assets: `${paths.root}/src/assets`, 
      src: `${paths.root}/src`,
      app: `${paths.root}/src/app`
    }
  },
  entry: {
    index: `./${paths.src}/index`
  }
}

