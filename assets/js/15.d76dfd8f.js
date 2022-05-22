(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{551:function(v,_,s){v.exports=s.p+"assets/img/image-20220409220820274.d228e619.png"},552:function(v,_,s){v.exports=s.p+"assets/img/image-20220409231450359.a864a2c6.png"},553:function(v,_,s){v.exports=s.p+"assets/img/image-20220410095659277.13bf74c7.png"},554:function(v,_,s){v.exports=s.p+"assets/img/image-20220410095643198.eed04e68.png"},555:function(v,_,s){v.exports=s.p+"assets/img/image-20220410101411504.b24b1d58.png"},742:function(v,_,s){"use strict";s.r(_);var t=s(4),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("模块化进程")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("全局function模式，容易造成全局命名冲突，因为都是挂载到window上的。")])]),v._v(" "),t("li",[t("p",[v._v("全局namespace模式，用对象封装模块，命名冲突概率减小。")])]),v._v(" "),t("li",[t("p",[v._v("IIFE 自执行函数创建闭包。无法解决模块间的依赖")])]),v._v(" "),t("li",[t("p",[v._v("CommonJS")])])]),v._v(" "),t("ul",[t("li"),v._v(" "),t("li",[v._v("主流模块化规范 Commonjs 、 AMD、CMD、ESM")]),v._v(" "),t("li",[v._v("​")])]),v._v(" "),t("h2",{attrs:{id:"commonjs规范及实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs规范及实现原理"}},[v._v("#")]),v._v(" CommonJS规范及实现原理")]),v._v(" "),t("blockquote",[t("p",[v._v("基于自执行函数实现的")])]),v._v(" "),t("ul",[t("li",[v._v("Nodejs的默认模块化规范（node14之后采用ESM），每个文件就是一个模块，有自己的作用域")]),v._v(" "),t("li",[v._v("Node中CommonJs模块加载采用同步加载方式")]),v._v(" "),t("li",[v._v("通过require加载模块，通过exports和modules.exports输出模块")]),v._v(" "),t("li",[v._v("不会污染全局作用域")]),v._v(" "),t("li",[v._v("模块可以被多次加载，第一次加载会被缓存，后续加载从缓存中获取")]),v._v(" "),t("li",[v._v("module.exports会覆盖其他返回结果")])]),v._v(" "),t("p",[t("img",{attrs:{src:s(551),alt:"实现原理"}})]),v._v(" "),t("h2",{attrs:{id:"commonjs模块打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs模块打包"}},[v._v("#")]),v._v(" CommonJS模块打包")]),v._v(" "),t("p",[v._v("使用browserify打包")]),v._v(" "),t("p",[t("img",{attrs:{src:s(552),alt:""}})]),v._v(" "),t("h2",{attrs:{id:"amd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[v._v("#")]),v._v(" AMD")]),v._v(" "),t("ul",[t("li",[v._v("AMD规范采用非同步加载模块，允许执行的回调函数")]),v._v(" "),t("li",[v._v("Nodejs模块通常位于本地，所以加载速度快，可以用同步加载。")]),v._v(" "),t("li",[v._v("浏览器环境，模块需要去网络请求，所以不适用于同步加载，需要异步加载")]),v._v(" "),t("li",[v._v("requirejs就是AMD的一个具体实现库")])]),v._v(" "),t("h2",{attrs:{id:"cmd规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd规范"}},[v._v("#")]),v._v(" CMD规范")]),v._v(" "),t("ul",[t("li",[v._v("整合了CommonJS和AMD的优点，异步模块化加载")]),v._v(" "),t("li",[v._v("专用于浏览器端，sea.js是一个CMD的实现库")]),v._v(" "),t("li",[v._v("AMD和CMD最大的问题是没有通过语法升级去解决模块化")])]),v._v(" "),t("h2",{attrs:{id:"esmodule规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esmodule规范"}},[v._v("#")]),v._v(" ESModule规范")]),v._v(" "),t("ul",[t("li",[v._v("理念是代码编写时就确定模块的依赖关系及输入输出")]),v._v(" "),t("li",[v._v("CommonJs和AMD必须运行时才确定依赖和输入输出")]),v._v(" "),t("li",[v._v("ESM通过 import加载模块，通过export输出模块")])]),v._v(" "),t("p",[t("img",{attrs:{src:s(553),alt:"image-20220410095659277"}})]),v._v(" "),t("p",[t("img",{attrs:{src:s(554),alt:"image-20220410095643198"}})]),v._v(" "),t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[v._v("#")]),v._v(" npm")]),v._v(" "),t("p",[t("img",{attrs:{src:s(555),alt:"image-20220410101411504"}})]),v._v(" "),t("h2",{attrs:{id:"webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[v._v("#")]),v._v(" webpack")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("概念")])]),v._v(" "),t("li",[t("p",[v._v("source-map")])]),v._v(" "),t("li",[t("p",[v._v("module")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("loader加载顺序 从下到上，从右到左⬅️")])]),v._v(" "),t("li",[t("p",[v._v("css-loader")])]),v._v(" "),t("li",[t("p",[v._v("style-loader-")])]),v._v(" "),t("li",[t("p",[v._v("自定义loader")])]),v._v(" "),t("li",[t("p",[v._v("内联loader")])])])]),v._v(" "),t("li",[t("p",[v._v("plugins")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("webpack hooks")]),v._v(" "),t("ul",[t("li",[v._v("compiler")]),v._v(" "),t("li",[v._v("complilation")])])]),v._v(" "),t("li",[t("p",[v._v("从BannerPlugin开始学习")])]),v._v(" "),t("li",[t("p",[v._v("手写一个FooterPlugin")])])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);