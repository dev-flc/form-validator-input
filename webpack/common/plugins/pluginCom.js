const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pluginCom = (VERSION_APP, NAME_APP) => [
  new HtmlWebpackPlugin({
    cache: true,
    favicon: path.resolve(
      __dirname,
      './../../../example/assets/images/logo.svg'
    ),
    filename: 'index.html',
    template: path.resolve(__dirname, './../../../example/index.ejs'),
    title: NAME_APP,
    version: VERSION_APP,
  }),
];

module.exports = pluginCom;
