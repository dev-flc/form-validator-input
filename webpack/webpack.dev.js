const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const devServer = require('./development/server/serverDev.js');
const moduleDev = require('./development/modules/moduleDev.js');
const { VERSION_APP, NAME_APP } = process.env;
const TIME = new Date().getTime();

module.exports = merge(common, {
  devServer,
  devtool: 'source-map',
  entry: {
    [NAME_APP]: {
      filename: `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
      import: [path.resolve(__dirname, './../example/index.js')],
    },
  },

  mode: 'development',

  module: moduleDev,

  watchOptions: { ignored: /node_modules/ },
});
