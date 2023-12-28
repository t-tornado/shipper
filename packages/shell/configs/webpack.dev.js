const { merge } = require("webpack-merge");
const $default = require("./webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlPlugin = require("html-webpack-plugin");
const { dependencies } = require("../package.json");

const dev = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3005/",
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell_app",
      filename: "remoteEntry.js",
      remotes: {
        auth: "eventli_auth_app@http://localhost:3003/remoteEntry.js",
        discoverEvents:
          "eventli_events_app@http://localhost:3000/remoteEntry.js",
        exploreEvent:
          "eventli_explore_event_app@http://localhost:3001/remoteEntry.js",
        profile: "eventli_profile_app@http://localhost:3002/remoteEntry.js",
        contexts: "shell_app@http://localhost:3005/remoteEntry.js",
      },
      exposes: {
        "./AuthStore": "./src/contexts/index.tsx",
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
    new HtmlPlugin({
      template: "./public/index.html",
    }),
  ],
};

const devServer = {
  port: 3005,
  historyApiFallback: true,
};

module.exports = merge($default, dev, { devServer });
