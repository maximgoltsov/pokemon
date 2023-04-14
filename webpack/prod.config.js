const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  mode: 'production',

  output: {
    assetModuleFilename: '[id][chunkhash][ext]',
    chunkFilename: '[id][chunkhash].js',
    filename: '[id][chunkhash].js',
  },

  devtool: false,

  plugins: [
    new CleanWebpackPlugin(),
  ],

  optimization: {
    minimize: true,
    chunkIds: 'natural',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        defaultVendors: {
          name: 'vendors',
          priority: -1,
          test: /[\\/]node_modules[\\/]/,
        },
        react: {
          name: 'vendors-react',
          test: /[\\/]node_modules[\\/]react/,
        },
      },
    },
  },
});
