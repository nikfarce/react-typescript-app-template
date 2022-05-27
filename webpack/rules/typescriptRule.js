const typescriptRule = {
  exclude: /node_modules/,
  test: /\.tsx?$/,
  loader: 'babel-loader',
};

module.exports = typescriptRule;
