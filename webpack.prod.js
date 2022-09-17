const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common,{
    mode: 'production',
    entry: {
       bundle: path.resolve(__dirname, 'src/index.js')
    }, 
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
});