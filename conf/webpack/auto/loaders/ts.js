module.exports = () => {
  return {
    test: /\.ts$/,
    exclude: /node_modules/,
    loaders: [
      'ts'
    ]
  };
}
