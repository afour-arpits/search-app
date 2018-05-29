const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin(), // un-comment to uglify the bundle
    new BundleAnalyzerPlugin() // un-comment to analyze the bundle
  ]
});