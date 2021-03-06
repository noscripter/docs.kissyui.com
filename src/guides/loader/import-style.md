# importStyle的使用

## 概述

ImportStyle是KISSY的模块样式引入工具。 提供页面上使用的组件列表及组件的依赖关系，ImportStyle可以帮助你阻塞地加载所有依赖的样式。 如果你的应用需要颗粒化地做按需加载，ImportStyle会是非常顺手的工具。
## 先决条件
- 头部引入
```
<script src='http://g.tbcdn.cn/kissy/k/1.4.2/??seed-min.js,import-style-min.js'></script>
```
- 页面是基于 KISSY 模块规范开发的，如依赖css，需要显式在requires里声明

## 使用指南

```
KISSY.config('modules', {
  'components/nav/index': {requires: ['components/nav/index.css']},
  'components/layout/index': {requires: ['components/layout/index.css']},
  'components/home/index': {requires: ['components/nav/index','components/layout/index']}
});

KISSY.config({
  'combine':true,
  'packages':[{
    'name':'components',
    'base':'http://assets.etao.net/apps/e/hotel/130716',
    'debug':'true'
  }]
});

KISSY.importStyle('components/home/index');
```
上面是一淘酒店项目中摘出的ImportStyle使用Demo，可以看出使用方式很简单——提供模块依赖信息、包配置， 最后调用importStyle，传入模块列表即可。