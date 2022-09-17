const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common,{
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
     },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
    },
    devServer : {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,    
    },
});