const path = require('path');

const { rootPath } = require('./utils');
const plugins = require('./plugins');
const rules = require('./rules');


const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: path.resolve(rootPath, 'src/index.tsx'),

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(rootPath, 'dist'),
    clean: true,
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
    plugins: [ plugins.tsconfigPathsPlugin ],
  },

  plugins: [
    plugins.htmlWebpackPlugin,
    plugins.providePlugin,
    plugins.miniCssExtractPlugin,
  ],

  module: {
    rules: [
      rules.imagesRule,
      rules.fontsRule,
      rules.csvRule,
      rules.xmlRule,
      rules.typescriptRule,
      ...rules.sassRule(isDev),
    ],
  },
};
