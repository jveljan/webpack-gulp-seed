/**
 * Factory for webpack plugins and loaders
 * 
 * Nothing special, just a named preconfigurations for all possible loaders and plugins that will be used by this application 
 */
const webpack = require('webpack');


function find(path, name) {
  const fn = require(path + '/' + name)
  if(typeof fn !== 'function') {
    throw new Error('Please export config through a function. Export at ' + path + '/' + name + ' is not a function.');
  }
  return fn;
}

module.exports = (base) => {
  return {
    plugin: (name, config) => {
      return find(base + '/plugins', name)(config);
    },
    loader: (name, config) => {
      return find(base + '/loaders', name)(config);
    }
  }
}
