const { merge } = require('webpack-merge');

const baseConfig = require('./webpack/base');
const prodConfig = require('./webpack/prod');
const devConfig = require('./webpack/dev');


const isProd = process.env.NODE_ENV === 'production';

module.exports = isProd
  ? merge(baseConfig, prodConfig)
  : merge(baseConfig, devConfig);
