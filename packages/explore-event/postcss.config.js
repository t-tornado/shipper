const tailwind = require("tailwindcss");
const autoPrefix = require("autoprefix");

module.exports = {
  plugins: [tailwind("./tailwind.config.js"), autoPrefix],
};
