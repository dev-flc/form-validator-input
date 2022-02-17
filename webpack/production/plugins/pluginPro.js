const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginPro = (VERSION_APP, TIME) => [
  new webpack.ids.HashedModuleIdsPlugin({
    context: __dirname,
    hashDigest: 'hex',
    hashDigestLength: 20,
    hashFunction: 'sha256',
  }),

  new CompressionPlugin({
    algorithm: 'gzip',
    deleteOriginalAssets: false,
    exclude: ['service-worker', 'firebase-messaging-sw', 'precache-manifest'],
    minRatio: Number.MAX_SAFE_INTEGER,
    test: /\.js$|\.png|\.svg$|\.jpg$|\.css$|\.eot?.+$|\.ttf?.+$|\.woff?.+$/,
    threshold: 0,
  }),

  new MiniCssExtractPlugin({
    filename: `assets/styles/${VERSION_APP}.[name].${TIME}.[contenthash].min.css`,
  }),
];

module.exports = pluginPro;
