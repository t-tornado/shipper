const tailwind = require("tailwindcss");
const autoprefix = require("autoprefix");

module.exports = {
  plugins: [tailwind("./tailwind.config.js"), autoprefix],
};
