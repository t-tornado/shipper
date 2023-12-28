const { ModuleFederationPlugin } = require("webpack").container;
const HtmlPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const $default = require("./webpack.common");
const { dependencies } = require("../package.json");

const dev = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3002/",
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "eventli_profile_app",
      filename: "remoteEntry.js",
      exposes: {
        "./ProfileApp": "./src/entry",
      },
      shared: {
        ...dependencies,
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
          singleton: true,
        },
        "react-router-dom": {
          requiredVersion: dependencies["react-router-dom"],
          singleton: true,
        },
      },
    }),
    new HtmlPlugin({ template: "./public/index.html" }),
  ],
};

const devServer = {
  port: 3002,
  historyApiFallback: true,
};

module.exports = merge($default, dev, { devServer });
