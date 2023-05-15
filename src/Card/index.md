---
title: Card 卡片
nav:
  title: 组件
  path: /componments
group:
  title: 数据展示
  path: /basic
  order: 3
---

# Card 卡片
通用卡片容器。
<br/>

## 何时使用
最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 代码演示

### 基础使用

<code src='./demos/demo1.jsx'></code>
<br/>
设置extra来确定是否自定义右侧内容，支持一切格式

### 自定义卡片样式 
<code src='./demos/demo2.jsx'></code>
<br/>
用户可以通过style属性自行设定样式，也可以通过borderColor、borderRadius等属性快速设定
### Button

| 参数  |                            说明                             |                 类型                  | 默认值 | 版本  |
| :---: | :---------------------------------------------------------: | :-----------------------------------: | :----: | :---: |
| async |           异步操作 onClick 执行时自动添加 loading           |                boolean                | false  |   -   |
| Role  | 角色权限 具体看 [Roles 组件](/hera-ui/business/roles#roles) | string \| (string \| (()=>boolean))[] |   -    | 2.2.3 |

兼容其他 antd Button 属性
