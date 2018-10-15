---
sidebarDepth: 0
---

# 安装使用

## 安装

``` bash
npm install mpvue-weui --save  # cnpm install mpvue-weui --save
```

## 全局引入 css 样式
在 `src/main.js` 中引入 weui.css

``` js
import 'mpvue-weui/src/style/weui.css';
```

## 引入组件

* 以 button 组件为例

``` js
import mpButton from 'mpvue-weui/src/button';
export default {
  components: {
    mpButton,
  },
}
```

## 使用

``` html
<mp-button type="default" size="large" btnClass="mb15">默认按钮</mp-button>
```

::: tip
目前由于 `mpvue` 暂不支持全局安装组件，因此只能通过页面单独引入。
:::