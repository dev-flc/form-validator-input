const moduleDev = {
  rules: [
    {
      test: /\.(sa|sc|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],
};

module.exports = moduleDev;
