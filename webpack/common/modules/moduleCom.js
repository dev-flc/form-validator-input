const moduleCom = (VERSION_APP, TIME) => ({
  rules: [
    {
      exclude: /node_modules/,
      test: /\.(js)$/,
      use: {
        loader: 'babel-loader',
      },
    },
  ],
});

module.exports = moduleCom;
