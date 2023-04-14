const path = require('path');

module.exports = {
  appBuild: path.join(__dirname, '../build'),
  appPublic: path.join(__dirname, '../public'),
  appSrc: path.join(__dirname, '../src'),
  appHtml: path.join(__dirname, '../public', 'index.html'),
  appIndexJs: path.join(__dirname, '../src', 'index.tsx'),
};
