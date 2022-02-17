const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const modulePro = {
  rules: [
    {
      resolve: { extensions: ['.scss', '.css'] },
      test: /\.(sa|sc|c)ss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
  ],
};

module.exports = modulePro;
