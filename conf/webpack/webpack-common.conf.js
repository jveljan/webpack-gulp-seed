
const autoprefixer = require('autoprefixer');

const conf = require('../conf');
const wpf = require('./wpf-loader')('./webpack-factory');

module.exports = () => {
  return {
    name: 'common-config',
    module: {
      preLoaders: [
        wpf.loader('tslint')
      ],
      loaders: [
        wpf.loader('json'),
        wpf.loader('ts'),
        wpf.loader('html')
      ]
    },
    plugins: [
      wpf.plugin('occurrence-order'),
      wpf.plugin('no-errors'),
      wpf.plugin('html', conf.paths.src + '/index.html'),
      wpf.plugin('angular-context-replacement', conf.paths.src)
    ],
    debug: false,
    postcss: () => [autoprefixer],
    resolve: {
      extensions: ['', '.js', '.ts']
    },
    entry: `./${conf.paths.src}/index`,
    ts: {
      configFileName: 'tsconfig.json'
    },
    tslint: {
      //configuration: require('../tslint.json')
    }
  };
}
