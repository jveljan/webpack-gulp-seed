
const autoprefixer = require('autoprefixer');
const paths = require('../paths.conf');
const compose = require('./compose')();

module.exports = {
  module: {
    preLoaders: [
      compose.loader('eslint'),
      compose.loader('tslint')
    ],
    loaders: [
      compose.loader('json'),
      compose.loader('ts'),
      compose.loader('html'),
      compose.loader('fonts', 'assets/fonts'),
      compose.loader('images', 'assets/images')
    ]
  },
  plugins: [
    compose.plugin('occurrence-order'),
    compose.plugin('no-errors'),
    compose.plugin('html', paths.src + '/index.html')
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

