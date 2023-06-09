---
title: Card 卡片
nav:
  title: 组件
  path: /componments
group:
  title: 基础组件
  path: /basic
  order: 1
---

# Button 输入框

基于 antd button 二次封装，兼容 antd button 所有属性

## 代码演示

### 基础使用

<code src='./demos/demo1.jsx'></code>

### 权限按钮

<code src='./demos/demo2.tsx' />

### Button

| 参数  |                            说明                             |                 类型                  | 默认值 | 版本  |
| :---: | :---------------------------------------------------------: | :-----------------------------------: | :----: | :---: |
| async |           异步操作 onClick 执行时自动添加 loading           |                boolean                | false  |   -   |
| Role  | 角色权限 具体看 [Roles 组件](/hera-ui/business/roles#roles) | string \| (string \| (()=>boolean))[] |   -    | 2.2.3 |

兼容其他 antd Button 属性
