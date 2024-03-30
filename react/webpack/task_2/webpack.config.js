const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: ''
    },
    mode: "production",
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
    }
}