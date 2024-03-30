const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
      header: './modules/header/header.js',
      body: './modules/body/body.js',
      footer: './modules/footer/footer.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [ "style-loader", "css-loader" ],
          },
          { 
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource'
          },
        ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8564,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html'
      }),
      new CleanWebpackPlugin()
    ]
}