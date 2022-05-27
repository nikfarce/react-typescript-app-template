const csvRule = {
  test: /\.(csv|tsv)$/,
  use: ['csv-loader'],
};

module.exports = csvRule;
