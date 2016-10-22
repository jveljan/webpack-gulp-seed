/**
 * Expose merge functionality on common object
 */
const _ = require('lodash');
const commonConfig = require('./webpack-common.conf');

/**
 * Extend helper to construct configuration objects for specific scenarios (dev, prod, test)
 * Extend strategy will merge object and arrays and overwrite values
 * eg.
 * const myDev = require('./webpack-common.conf')({
 *  plugins: [{
 *    
 *  }]
 * })
 */
module.exports = (cfg) => {
  return _.mergeWith(commonConfig(), cfg, (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  });
}