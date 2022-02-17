const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const devServer = require('./development/server/serverDev.js');
const moduleDev = require('./development/modules/moduleDev.js');
module.exports = merge(common, {
  devServer,

  devtool: 'source-map',

  mode: 'development',

  module: moduleDev,

  watchOptions: { ignored: /node_modules/ },
});
