const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = {
  filename: '[name].[contenthash].css',
  chunkFilename: 'chunk.[name].[contenthash].css',
};

module.exports = new MiniCssExtractPlugin(config);
