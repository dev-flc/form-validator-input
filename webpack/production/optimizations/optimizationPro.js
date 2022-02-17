const optimizationPro = {
  minimize: true,

  runtimeChunk: 'single',

  splitChunks: {
    cacheGroups: {
      vendor: {
        chunks: 'all',
        name: 'commons',
        test: /[\\/]node_modules[\\/]/,
      },
    },
  },
};

module.exports = optimizationPro;
