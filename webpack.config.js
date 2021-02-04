const BasicPlugin = require("./plugins/Basicplugin")

var basicplugin = require('./plugins/BasicPlugin');

module.exports = {
  plugins: [
    new basicplugin()
  ]
}