const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const openBrowser = require('react-dev-utils/openBrowser');

const baseConfig = require('./base.config');
const paths = require('./paths');

module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'source-map',

  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],

  optimization: {
    chunkIds: 'named',
    splitChunks: {
      chunks: 'all',
    },
  },

  performance: {
    hints: false,
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT,
    static: {
      directory: paths.appBuild,
    },
    devMiddleware: {
      stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        modules: false,
        performance: true,
        hash: false,
        version: false,
        timings: true,
        warnings: true,
        children: false,
      },
    },
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL,
        logLevel: 'debug',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    onAfterSetupMiddleware: () => {
      openBrowser(`http://localhost:${process.env.PORT}`);
    }
  },
});
