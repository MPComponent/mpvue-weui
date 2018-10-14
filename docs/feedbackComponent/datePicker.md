# DatePicker

日期选择器，基于 `picker-view` 和 `picker-view-column` 实现。

<imgPreview imgUrl="/assets/date-picker.png"/>

### 引入

``` js
import mpDatepicker from 'mpvue-weui/src/date-picker';
export default {
  components: {
    mpDatepicker,
  },
}
```

### 使用

``` html
 <mp-datepicker ref="mpDatePicker" :defaultDate="defaultDate" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel"></mp-datepicker>
```

``` js
/* 调用组件的 `show` 方法进行初始化 */
this.$refs.mpDatePicker.show();
```

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| defaultDate | 设置初始化日期，默认为当天 | `Array` | `[]` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @onChange | 组件滚动时回调 | 返回选中的返回 label , value 以及 index 的值 |
| @onConfirm | 组件点击确定时回调 | 返回选中的返回 label , value 以及 index 的值 |
| @onCancel | 组件点击取消时回调 | 返回选中的返回 label , value 以及 index 的值 |

##### 返回参数说明

* value：日期数值，例如 `2018-10-2`
* label：展示的日期， 例如：`2018年-10月-2日`
* index: `picker-view` 的值，例如 `[118, 9, 1]`
