# Actionsheet

弹出式菜单，采用小程序原生的 `actionsheet`。

<imgPreview imgUrl="/assets/actionsheet.png"/>

### 引入

``` js
import mpActionsheet from 'mpvue-weui/actionsheet';
export default {
  components: {
    mpActionsheet,
  },
}
```

### 使用

``` html
<mp-actionsheet ref="actionsheet" :itemList="itemList" @confirm="confirm" @cancel="cancel"></mp-actionsheet>
```

``` js
/* 调用组件的 `show` 方法进行初始化 */
this.$refs.actionsheet.show();
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| itemList | 按钮的文字数组，数组长度最大为 6  | `Array` | `[]` |


### Event
| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @confirm | 点击文字按钮时回调 | 返回点击的 `tapIndex` 以及按钮文字 `tapLabel` |
| @cancel | 点击取消时回调 | 返回 `errMsg` |