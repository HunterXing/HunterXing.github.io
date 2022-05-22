(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{661:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"rollup-webpack-gulp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollup-webpack-gulp"}},[t._v("#")]),t._v(" rollup/webpack/gulp")]),t._v(" "),s("h2",{attrs:{id:"构建工具对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建工具对比"}},[t._v("#")]),t._v(" 构建工具对比")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("简介")]),t._v(" "),s("th",[t._v("优点")]),t._v(" "),s("th",[t._v("缺点")]),t._v(" "),s("th",[t._v("应用场景")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("webpack")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("一种前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分割，等到实际需要的时候再异步加载")]),t._v(" "),s("td",[t._v("模块化、静态资源整合、公共代码拆分、异步加载、热更新等等")]),t._v(" "),s("td",[t._v("1. 配置复杂  2. 冗余代码较多 3. 不支持输出esm格式的bundle")]),t._v(" "),s("td",[t._v("应用程序开发")])]),t._v(" "),s("tr",[s("td",[t._v("rollup")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("一个模块打包工具, 可以将我们按照 ESM (ES2015 Module) 规范编写的源码构建输出如下格式:  iife: 自执行函数, 可通过 "),s("code",[t._v("<script>")]),t._v(" 标签加载  amd: 通过 "),s("code",[t._v("RequireJS")]),t._v(" 加载  cjs: Node 默认的模块规范, 可通过 "),s("code",[t._v("Webpack")]),t._v(" 加载  umd: 兼容 IIFE, AMD, CJS 三种模块规范  esm: ES2015 Module 规范, 可用 "),s("code",[t._v("Webpack")]),t._v(", "),s("code",[t._v("Rollup")]),t._v(" 加载")]),t._v(" "),s("td",[t._v("1. 基于ES6，支持动态导入、tree shaking 2. 可以将所有小文件打到一个bundle里，所有代码都在同一个函数作用域中，不压缩混淆的情况下代码依旧可读 3. 冗余代码少，执行快")]),t._v(" "),s("td",[t._v("1. 不支持热更新（可以通过livereload插件实现） 2. 对于commonjs模块，需要用rollup-plugin-commonjs插件读成ES6代码后再处理 3. umd和iife格式无法对公共代码进行拆分，因为自执行函数会把所有的模块都放到一个函数中，并没有像webpack一样有一些引导代码，所以没有办法做到代码拆分")]),t._v(" "),s("td",[t._v("框架、组件库、生成单一umd文件的场景")])]),t._v(" "),s("tr",[s("td",[t._v("gulp")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单，基于流式操作，通过各种 Transform Stream 来实现文件不断处理 输出")]),t._v(" "),s("td",[t._v("1. 文档简单，学习成本低 2. 借助插件，可以对大量源文件进行流式处理，可以对文件类型进行多种操作处理")]),t._v(" "),s("td",[t._v("1. 不支持tree shaking、热更新、公共代码拆分 2. 无法进行js模块化，只是对静态资源进行流式处理和整合")]),t._v(" "),s("td",[t._v("静态资源密集型场景，如css、img等静态资源整合")])])])]),t._v(" "),s("h2",{attrs:{id:"rollup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollup"}},[t._v("#")]),t._v(" rollup")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("amd – 异步模块定义"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("用于像RequireJS这样的模块加载器\ncjs – CommonJS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("适用于 Node 和 Browserify"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Webpack "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("例如require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nesm – 将软件包保存为"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ES")]),t._v("模块文件 例如 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" xxx "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\niife – 一个自动执行的功能"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("适合作为"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("标签"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("（如果要为应用程序创建一个捆绑包"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("您可能想要使用它"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("因为它会使文件大小变小"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("）\numd – 通用模块定义"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("以 amd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cjs 和 iife 为一体"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("umd是amd和CommonJS的糅合"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("umd先判断是否支持Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js的模块（exports）是否存在"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("存在则使用Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js模块模式"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" webpack")]),t._v(" "),s("h2",{attrs:{id:"gulp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gulp"}},[t._v("#")]),t._v(" gulp")]),t._v(" "),s("p",[t._v("对静态资源进行流式处理和整合")])])}),[],!1,null,null,null);a.default=n.exports}}]);