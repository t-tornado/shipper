const { ModuleFederationPlugin } = require("webpack").container;
const { merge } = require("webpack-merge");
const _default = require("./webpack.common");
const { dependencies } = require("../package.json");

const dev = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "eventli_explore_event_app",
      filename: "remoteEntry.js",
      exposes: {
        "./ExploreEventApp": "./src/entry",
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
  ],
};

const devServer = {
  port: 3001,
  historyApiFallback: true,
};

module.exports = merge(_default, dev, { devServer });
