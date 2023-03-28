---
title: Button 按钮
nav:
  title: 组件
  path: /componments
group:
  title: 基础组件
  path: /basic
  order: 2
---

# Button 按钮

按钮用于开始一个即时操作  
<br/>
## 何时使用


标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
除了支持 ant-design 基本属性，我们还支持用户的部分自定义行为
由于其完全支持antd的基本属性，用户可以前往antd官网查看更多详细文档
<a>https://ant.design/index-cn</a>  
<br/>
为了区分不同业务，除了支持antd原本的五种按钮，JC-UI另外添加了三种不种状态下的按钮
 <ul>
   <li>创建数据按钮</li>
   <li>编辑数据按钮</li>
   <li>删除数据按钮</li>
</ul>
同时支持用户添加相应属性，对按钮进行自定义设计
<br/>
<br/>

## 代码演示

### 基础使用
<code src='./demos/demo1.jsx' ></code>

### 业务按钮

<code src='./demos/demo2.jsx' ></code>
<br/>
通过指定不同的editType，区分不同业务下按钮的不同样式

### 自定义样式
<code src='./demos/demo3.jsx' ></code>
<br/>
对color（字体颜色）、bgColor（背景颜色）等属性赋值，定制个性化按钮

### 自带间距
<code src='./demos/demo4.jsx' ></code>
<br/>
设置rowMargin或columnMargin的值为true，让按钮横向或纵向自带间距

### 防抖按钮
<code src='./demos/demo5.jsx' ></code>
<br/>
具有防抖功能的按钮，设置debounce属性决定是否启用防抖功能，debounceTime参数设置等待时间，默认1s
<br/>
<br/>
<br/>
### 主要参数

| 参数  |                            说明                              |                 类型                  |    默认值   |  版本  |
| :---: | :---------------------------------------------------------: | :-----------------------------------:|   :----:   | :---: |
| editType |              设置editType，切换按钮的三种样式                 |               string                |     -      | 1.0.0 |
| color    |                     字体颜色                               |               string                |   #000000  | 1.0.0 |
| bgColor  |                     背景颜色                               |               string                |   #FFFFFF  | 1.0.0 |
| rowMargin |                    横向间距                               |               boolean               |   false    | 1.0.0 |
| debounce |                     是否开启防抖                            |               boolean               |   false    | 1.0.0 |
| debounceTime |                 函数调用间隔时间                         |               number               |   1000ms    | 1.0.0 |


兼容其他 antd Button 属性
