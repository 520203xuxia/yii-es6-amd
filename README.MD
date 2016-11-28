yii-es6-amd
===========
    将ES6的语法转为Requirejs兼容的语法，集AMD与ES6所长，将ES6转换为AMD后的语句如下
``` javascript
define(['exports', './commons/user', 'd3'], function (exports, _user, d3) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _user2 = _interopRequireDefault(_user);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    init: function init() {
      _user2.default.name = 'Gan Huan';
      d3.select('body').append('h1').text(_user2.default.name);
    }
  };
});
```

## 为什么要用Requirejs
    1. 相对vue、jsx文件，能生成更好的JSDOC；
    2. 能更好地按需加载，尤其是Requirejs支持的各类插件，如text、css、image等；
    3. 能更好地优化资源打包，r.js能大量减少重复文件；
    4. 能支持动态加载

## ES6与Babel
<p>ES6有多种翻译器，开始我想从grunt插件里面找ES6翻译成AMD语法的插件，结果大失所望，最后仔细参照了babel项目，在其插件里发现了babel-plugin-transform-es2015-modules-amd，可满足需求。</p>
    在此吐槽一下grunt的插件文件，实例不够，切大多简略且说明不清楚，要把属性配置完全几乎一半都要靠猜。
    要用grunt-babel将ES6转换为满足Requirejs的AMD语法，必须启用babelrc文件，配置如下：
``` javascript
babel: {
    options: {
        sourceMap: false,
        presets: ['babel-preset-es2015'],   // 还可以添加更多特性
        babelrc: true   // 必须启用babelrc文件
    },
    dist: {
        expand: true,
        cwd: 'src/es6/', // ES6文件的存放位置
        src: ['**/*.js'], // 匹配的文件
        dest: 'src/amd' // 输出目录
        ext: '.js', // 输出的后缀名
    }
}
```
    然后再rc文件中启用babel-plugin-transform-es2015-modules-amd插件，如下：
``` javascript
{
	"plugins": ["transform-es2015-modules-amd"],    //需要安装 babel-plugin-transform-es2015-modules-amd插件
	"presets": ["babel-preset-es2015"]
}
```
    现在运行grunt命令即可产生前面的AMD代码。

## ES6与ESlint
<p>按照grunt-eslint的默认配置，则发生“Parsing error: 'import' and 'export' may appear only with 'sourceType: module'”错误，直接崩溃，后查阅多方文档，发现是解析器引发的错误，改进如下：</p>
``` javascript
 eslint: {
    options: {
        quiet: false,
        //  configFile: 'eslint.json',
        //  可以将Eslint的规则配置内容放置在此文件中，但测试发现，eslintrc完全可以配置所有内容
        outputFile: 'eslint.log',   //  eslint检查结果的输出日志
        useEslintrc: true   //  启用eslintrc文件，非常重要
    },
    all: {
        files: {
            src: ['src/es6/**/*.js']
        }
    },
    //  target: ['Gruntfile.js']
}
```
    在.babelrc文件中添加如下配置
``` javascript
{
    "extend": ["eslint:recommended"],
    "parser": "babel-eslint",   // 必须指定解析器，否则错误难消
    "env": {
        "amd": true,
        "es6": true,
        "browser": true,
        "node": false
    },
    "rules": {
        // 添加各类校验规则
    }
}
```

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

## ES6默认转ES5后的代码
``` javascript
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./commons/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var d3 = require('d3'); //  required library that don't need default

exports.default = {
  init: function init() {
    _user2.default.name = 'Gan Huan';
    d3.select('body').append('h1').text(_user2.default.name);
  }
};
```

## 引用的相关资源
    1. [babel-plugin-transform-es2015-modules-amd](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-amd)
    2. [Eslint Demo](http://eslint.org/demo/)
    3. [grunt-eslint](https://www.npmjs.com/package/grunt-eslint)
    4. [.eslintrc](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
    5. [Eslint Rules](http://eslint.org/docs/rules/)
    6. [Eslint Config](http://eslint.org/docs/user-guide/configuring)
    7. [Requirejs Optimization](http://requirejs.org/docs/optimization.html)
    8. [Es JSDOC]