const path = require('path');

const devServer = {
  allowedHosts: 'all',
  client: { overlay: true, progress: true },
  compress: true,
  historyApiFallback: true,
  host: '127.0.0.1',
  hot: true,
  open: true,
  port: 8080,
  static: { directory: path.resolve(__dirname, 'public') },
  watchFiles: ['src/**/*'],
};

module.exports = devServer;
