const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([
      {
        from: "./src/public/**/*",
        to: "./[name].[ext]"
      }
    ])
  ]
};
