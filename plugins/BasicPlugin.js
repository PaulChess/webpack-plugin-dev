class BasicPlugin {
  // options获取用户配置
  constructor(options) {
    console.log('constructor');
  }

  apply(compiler) {
    console.log('compiler');
    console.log(compiler);
  }
}


module.exports = BasicPlugin;