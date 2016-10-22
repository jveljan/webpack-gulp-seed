
const autoprefixer = require('autoprefixer');

const paths = require('../paths.conf');
const lot = require('./lot')();

module.exports = {
  name: 'common-config',
  module: {
    preLoaders: [
      lot.loader('tslint')
    ],
    loaders: [
      lot.loader('json'),
      lot.loader('ts'),
      lot.loader('html')
    ]
  },
  plugins: [
    lot.plugin('occurrence-order'),
    lot.plugin('no-errors'),
    lot.plugin('html', paths.src + '/index.html'),
    lot.plugin('angular-context-replacement', paths.src)
  ],
  debug: false,
  postcss: () => [autoprefixer],
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  entry: `./${paths.src}/index`,
  ts: {
    configFileName: 'tsconfig.json'
  },
  tslint: {
    //configuration: require('../tslint.json')
  }
}

