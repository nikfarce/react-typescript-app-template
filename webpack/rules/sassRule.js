const createLocalIdent = require('mini-css-class-name/css-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const localIndent = createLocalIdent({
  excludePattern: /[dD]/,
});

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function sassRule(isDev) {
  const lastLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;
  const cssLoader = (options) => ({ loader: 'css-loader', options });
  const postcssLoader = { loader: 'postcss-loader' };
  const sassLoader = { loader: 'sass-loader' };

  return [
    {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: [
        lastLoader,
        cssLoader({ importLoaders: 3 }),
        postcssLoader,
        sassLoader,
      ],
    },
    {
      test: sassModuleRegex,
      use: [
        lastLoader,
        'css-modules-typescript-loader',
        cssLoader({
          importLoaders: 1,
          modules: isDev
            ? { localIdentName: '[name]_[local]__[hash:base64:5]' }
            : { getLocalIdent: localIndent },
        }),
        postcssLoader,
        sassLoader,
      ],
    },
  ];
};
