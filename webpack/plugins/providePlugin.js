const { ProvidePlugin } = require('webpack');


const config = {
  'React': 'react',
};

module.exports = new ProvidePlugin(config);
