# webpack-plugin-dev
webpack插件开发

## webpack核心概念
1. 入口Entry: Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入
2. 模块Modules: 在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块
3. 代码块Chunk: 一个 Chunk 由多个模块组合而成，用于代码合并与分割
4. 加载器Loader: 用于把模块原内容按照需求转换成新内容。
5. 插件Plugin: Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。

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