yii-es6-amd
===========
    将ES6的语法转为Requirejs兼容的语法，集AMD与ES6所长

## 为什么要用Requirejs
    1. 相对vue、jsx文件，能生成更好的JSDOC；
    2. 能更好地按需加载，尤其是Requirejs支持的各类插件，如text、css、image等；
    3. 能更好地优化资源打包，r.js能大量减少重复文件；
    4. 能支持动态加载

## ES6 default引发的问题
    通过ES6 import语法引入的语句，翻译后会默认带上default属性，在大多数情况下会引发引用错误(多为undefined错误)，如下
``` javascript
//  ES语法方式引入d3
import d3 from 'd3'
//  调用ES6引入的d3
d3.select('body').append('h1').text(user.name)
//  用babel编译后生成的JS为d3.default.select('body').append('h1').text(user.name),则发生方法调用错误
```
    改进方法如下，将import方式改为requirejs方式
``` javascript
let d3 = require('d3') //这样引入的对象将不会添加default属性
```

## 引用的相关资源
    [babel-plugin-transform-es2015-modules-amd](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-amd)
    [Eslint Demo](http://eslint.org/demo/)
    [grunt-eslint](https://www.npmjs.com/package/grunt-eslint)
    [.eslintrc](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
    [Eslint Rules](http://eslint.org/docs/rules/)
    [Eslint Config](http://eslint.org/docs/user-guide/configuring)
    [Requirejs Optimization](http://requirejs.org/docs/optimization.html)