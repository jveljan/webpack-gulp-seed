
const autoprefixer = require('autoprefixer');

const paths = require('../paths.conf');
const ct = require('./map')();

module.exports = {
  name: 'common-config',
  module: {
    preLoaders: [
      ct.loader('tslint')
    ],
    loaders: [
      ct.loader('json'),
      ct.loader('ts'),
      ct.loader('html')
    ]
  },
  plugins: [
    ct.plugin('occurrence-order'),
    ct.plugin('no-errors'),
    ct.plugin('html', paths.src + '/index.html'),
    ct.plugin('angular-context-replacement', paths.src)
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

