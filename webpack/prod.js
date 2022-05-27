const { cssMinimizerPlugin } = require('./plugins');


module.exports = {
  mode: 'production',

  devtool: 'source-map',

  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      cssMinimizerPlugin,
    ],
  },
};
