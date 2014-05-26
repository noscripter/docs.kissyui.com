/**
@module tabs
*/

/**
@class Tabs
@constructor
@extends Component.Container
@param config {Object}
*/

/**
添加一个 tab 和 panel
@method addItem
@param item {Object}
@param item.title {String} tab 标题
@param item.content {String} panel 内容
*/

/**
移除指定位置的 item
@method removeItemAt
@param index {Number} item 下标
@param destroy {Boolean} 是否销毁节点
*/

/**
移除 tab 所在位置的 item
@method removeItemByTab
@param tab {Tabs.tab} tab 实例
@param destroy {Boolean} 是否销毁节点
*/

/**
移除 panel 所在位置的 item
@method removeItemByPanel
@param panel {Tans.Panel}  panel 实例
@param destroy {Boolean} 是否销毁节点
*/

/**
得到选中的 tab 实例
@method getSelectedTab
@return {Tabs.Tab}
*/

/**
得到选中的 panel 实例
@method getSelectedPanel
@return {Tabs.Panel}
*/

/**
得到所有 tab 实例数组
@method getTabs
@return {Array} tab的实例组成的数组
*/

/**
得到所有 panel 实例数组
@method getPanels
@return {Array<Tabs.Panel>}
*/

/**
设置某个 tab 实例为选中
@method setSelectedTab
@param tab {Tabs.Tab}
*/

/**
设置某个 panel 实例为选中
@method setSelectedPanel
@param panel {Tans.Panel}
*/

/**
选中 tab 改变前触发
@event beforeSelectedTabChange
@param ev {Object}
@param ev.newVal {Tabs.Tab} 新的 tab 实例
*/

/**
选中 tab 改变后触发
@event afterSelectedTabChange
@param ev {Object}
@param ev.newVal {Tabs.Tab} 新的 tab 实例
*/

/**
对象数组，可用于快速构建 tabs，单个对象包括 title 与 content 两个属性
@attribute items {Array} 
*/

/**
可取值'mouse'和'click'，表示怎样触发Tabs的切换
@attribute changeType {String} 
*/

/**
表示Tabs菜单相对Tabs内容的位置，可取值'top'/'right'/'bottom'/'left'，默认为'top'
@attribute barOrientation {String} 
@default "top"
*/

/**
是否延时渲染
@attribute lazyRender {Boolean}
*/






/**
@class Tab
@constructor
@extends Button
@namespace Tabs
@param config
*/

/**
是否选中
@attribute selected {Boolean}
*/

/**
是否启用懒加载机制，默认 false
@attribute lazyRender=false {Boolean}
*/





/**
@class Panel
@constructor
@extends Component.Container
@namespace Tabs
@param config {Object}
*/

/**
是否选中
@attribute selected {Boolean}
*/