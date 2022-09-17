const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge").merge;
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: false,
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Application",
      filename: "index.html",
      template: "src/template.html",
    }),
    new HtmlWebpackPlugin({
      title: "Login",
      filename: "Login.html",
      template: "src/Login.html",
    }),
  ],
});
