const path = require("path");

module.exports = {
  entry: "./frontend/vizsorts.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react", "@babel/env", "@babel/react"]
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
