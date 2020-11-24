const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const pkg = require("../package.json");

const DOMAIN = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${DOMAIN}/marketing/remoteEntry.js`,
      },
      shared: pkg.dependencies,
    }),
    new HTMLWebpackPlugin({ template: "./public/index.html" }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
