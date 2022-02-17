const moduleCom = (VERSION_APP, TIME) => ({
  rules: [
    {
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      generator: {
        filename: `assets/images/[name].${VERSION_APP}.${TIME}.[hash][ext][query]`,
      },
      test: /\.(png|jpg|gif|svg)(\?[\s\S]+)?$/,
      type: 'asset/resource',
    },
    {
      generator: {
        filename: `assets/fonts/[name].${VERSION_APP}.${TIME}.[hash][ext][query]`,
      },
      test: /\.(ttf|eot|otf)(\?[\s\S]+)?$/,
      type: 'asset/resource',
    },
  ],
});

module.exports = moduleCom;
