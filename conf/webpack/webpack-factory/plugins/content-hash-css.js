const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = () => {
  return new ExtractTextPlugin('index-[contenthash].css');
}
