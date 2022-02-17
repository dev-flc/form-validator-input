const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const modulePro = require('./production/modules/modulePro.js');
const pluginPro = require('./production/plugins/pluginPro.js');
const optimizationPro = require('./production/optimizations/optimizationPro.js');
const { VERSION_APP } = process.env;
const TIME = new Date().getTime();

module.exports = merge(common, {
  devtool: 'source-map',

  mode: 'production',

  module: modulePro,

  optimization: optimizationPro,

  output: {
    chunkFilename: `js/${VERSION_APP}.[name].[id].${TIME}.[contenthash].[chunkhash].min.js`,
    clean: true,
    filename: `js/${VERSION_APP}.[name].${TIME}.[contenthash].min.js`,
    path: path.join(__dirname, './../public'),
    publicPath: '/',
  },

  plugins: pluginPro(VERSION_APP, TIME),

  stats: 'minimal',
});
