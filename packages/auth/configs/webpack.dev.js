const { merge } = require("webpack-merge");
const $default = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlPlugin = require("html-webpack-plugin");
const { dependencies } = require("../package.json");

const dev = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3003/",
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "eventli_auth_app",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthPage": "./src/entry",
      },
      remotes: {
        contexts: "shell_app@http://localhost:3005/remoteEntry.js",
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
  port: 3003,
  historyApiFallback: true,
};
module.exports = merge($default, dev, { devServer });
