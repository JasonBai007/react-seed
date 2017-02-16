## Introduction

This repository is an universal React-ES6-Webpack boilerplate for developer to quickly build a super fast and powerful web app that can be rendered on the client using the most cutting-edge technology. Compared to others, this boilerplate has more pithily and more elegant configuration file based on environment variables, one for development, one for production.

## Technology Stack
- React
- React-Router
- ES6
- jQuery
- antd
- Less
- AnimateCSS
- moment
- Ajax
- Mock
- ECharts
- Babel
- Webpack
- Yarn

## Getting Started

```sh
安装Yarn $ npm install -g yarn
安装依赖 $ yarn
启动服务 $ yarn start
生成文件 $ yarn run build
```
## Notes

- JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析
- 组件类的第一个字母必须大写
- 组件类只能包含一个顶层标签
- 组件的属性可以在组件类的 this.props 对象上获取
- class 属性需要写成 className ，for 属性需要写成 htmlFor
- this.props.children 属性表示组件的所有子节点
- this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array
- React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 React.Children.map 来遍历子节点
- 由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错
- this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性
- 我们写一个XML标签，实质上就是在调用 React.createElement 这个方法，并返回一个 ReactElement 对象
- 渲染HTML标签，声明变量采用 首字母小写
- 渲染React组件，声明变量采用 首字母大写
- 当需要拓展我们的属性的时候，定义个一个属性对象，并通过 {…props} 的方式引入
- 属性值使用表达式，只要用 {} 替换 ""
- 在一个组件的子元素位置使用注释要用 {} 包起来 
- 直接在标签上使用style属性时，要写成style={{}}是两个大括号
- margin-top要写成marginTop
- 如果需要使用自定义属性，要加 data- 前缀
- 在编写JSX时，在 { } 中不能使用语句（if语句、for语句等等），但可以使用求值表达式
- map遍历的时候，需要为每一条记录添加key
- 在ES6里，我们通过定义一个继承自React.Component的class来定义一个组件类
- 给组件定义方法不再用 名字: function()的写法，而是直接用名字()，在方法的最后也不能有逗号了
- 在ES6下，你需要通过bind来绑定this引用，或者使用箭头函数（它会绑定当前scope的this引用）来调用
- sources下，点开可以看到webpack:目录，里面可以直接看到我们开发态的源代码，方便调试
- "build": "rimraf app/dist && webpack -p --env.config production" 先清除dist目录

## Articles
- [react架构经验分享](https://segmentfault.com/blog/hyyreact)
- [React组件生命周期小结](http://www.jianshu.com/p/4784216b8194)
- [react点击事件如何传传传参](https://segmentfault.com/q/1010000004185137)
- [前端外刊评论 - react](https://zhuanlan.zhihu.com/FrontendMagazine?topic=React)


## License

[MIT](https://github.com/chikara-chan/react-isomorphic-boilerplate/blob/master/LICENSE)
