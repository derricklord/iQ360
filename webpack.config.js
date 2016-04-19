
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query:{presets:['react','es2015']}}
    ]
  },
  plugins: [
      HTMLWebpackPluginConfig,
      new LiveReloadPlugin()
  ]
};
