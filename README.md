# webpack-plugin-dev
webpack插件开发


## webpack插件编写步骤
一个 webpack plugin 基本包含以下几步：
1. 一个 JavaScript 函数或者类
2. 在函数原型（prototype）中定义一个注入compiler对象的apply方法
3. apply函数中通过compiler插入指定的事件钩子，在钩子回调中拿到compilation对象
4. 使用compilation操纵修改webpack内部实例数据
5. 异步插件，数据处理完后使用callback回调

## 执行过程
1. webpack 启动后，在读取配置的过程中会先执行 new WebpackCleanupPlugin() 初始化一个 WebpackCleanupPlugin 获得其实例。
2. 在初始化 compiler 对象后，再调用 WebpackCleanupPlugin.apply(compiler) 给插件实例传入 compiler 对象。
3. 插件实例在获取到 compiler 对象后，就可以通过 compiler.plugin(事件名称, 回调函数) 监听到 Webpack 广播出来的事件。
并且可以通过 compiler 对象去操作 webpack。