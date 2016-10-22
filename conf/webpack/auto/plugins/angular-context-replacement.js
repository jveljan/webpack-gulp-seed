const webpack = require('webpack');
module.exports = (path) => {
  return new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path
    );
}
