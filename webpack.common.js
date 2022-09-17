const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
       bundle: path.resolve(__dirname, 'src/index.js')
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Webpack Application',
        filename: 'index.html',
        template: 'src/template.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Login',
            filename: 'Login.html',
            template: 'src/Login.html'
            })
    ]
}