const path = require('path');
const moduleCom = require('./common/modules/moduleCom.js');
const pluginCom = require('./common/plugins/pluginCom.js');
const aliasCom = require('./common/resolve/aliasCom.js');
const extensionCom = require('./common/resolve/extensionCom.js');

const TIME = new Date().getTime();
const { VERSION_APP, NAME_APP } = process.env;

module.exports = {
  entry: {
    [NAME_APP]: {
      filename: `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
      import: [
        path.resolve(__dirname, './../src/index.js'),
        path.resolve(__dirname, './../src/assets/styles/index.scss'),
      ],
    },
  },

  module: moduleCom(VERSION_APP, TIME),

  output: {
    chunkFilename: `js/[id].${VERSION_APP}.${TIME}.[contenthash].js`,
    chunkLoadTimeout: 30000,
    clean: true,
    filename: `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
    path: path.resolve(__dirname, 'public'),
    pathinfo: true,
    publicPath: '/',
    uniqueName: NAME_APP,
  },

  plugins: pluginCom(VERSION_APP, NAME_APP),

  resolve: { alias: aliasCom, extensions: extensionCom },
};
