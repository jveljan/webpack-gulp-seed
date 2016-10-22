module.exports = () => {
  return {
    test: /\.ts$/,
    exclude: /node_modules/,
    loader: 'tslint'
  };
}
