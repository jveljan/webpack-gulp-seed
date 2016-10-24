module.exports = () => {
  return  {
    test: /\.js$/,
    loader: 'eslint',
    exclude: /node_modules/
  };
}