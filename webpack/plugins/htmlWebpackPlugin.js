const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { rootPath } = require('../utils');

const config = {
  template: path.resolve(rootPath, 'public/index.html'),
};

module.exports = new HtmlWebpackPlugin(config);
