const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const HtmlPluginConfig = new HtmlPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'main-bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [HtmlPluginConfig],

  devServer: {
    inline: true,
    port: 9000
  }
}
