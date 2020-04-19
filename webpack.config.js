const webpack = require("webpack");  // eslint-disable-line
const path = require("path"); // eslint-disable-line
const CopyPlugin = require("copy-webpack-plugin");  // eslint-disable-line

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    content: path.join(__dirname, "src/content/content.ts"),
    background: path.join(__dirname, "src/background/background.ts"),
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyPlugin([{ from: ".", to: "../" }], { context: "public" }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
