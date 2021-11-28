const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      // { test: /\.svg$/, use: "svg-inline-loader" },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.js$/, use: "babel-loader" },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: true,
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
  devServer: {
    static: "./dist",
    open: true,
    compress: true,
    hot: true,
  },
  mode: "none",
};
