require('dotenv').config();

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const paths = require('./paths');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  context: paths.appSrc,

  entry: paths.appIndexJs,

  output: {
    path: paths.appBuild,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  resolve: {
    alias: {
      '@core': path.resolve(paths.appSrc, 'core'),
      '@features': path.resolve(paths.appSrc, 'features'),
      '@widgets': path.resolve(paths.appSrc, 'widgets'),
      '@pages': path.resolve(paths.appSrc, 'pages'),
    },
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            cacheDirectory: true,
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-env', { targets: { browsers: 'last 2 versions' } }],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
              '@babel/plugin-transform-runtime',
              [
                'babel-plugin-styled-components',
                {
                  ssr: false,
                  minify: !isDevelopment,
                  displayName: isDevelopment,
                },
              ],
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      },
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new NodePolyfillPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: paths.appPublic,
          from: '*.*',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.appHtml,
      inject: true,
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: process.env.PUBLIC_URL,
      PROJECT_TITLE: process.env.PROJECT_TITLE,
    }),
  ],
};
