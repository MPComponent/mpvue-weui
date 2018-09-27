# Picker

选择器，基于 `picker-view` 和 `picker-view-column` 实现。

<imgPreview imgUrl="/assets/picker.png"/>

### 引入

``` js
import mpPicker from 'mpvue-weui/picker';
export default {
  components: {
    mpPicker,
  },
}
```

### 使用

``` html
<mp-picker ref="mpvuePicker" :mode="mode" :deepLength=deepLength :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mp-picker>
```

### API


### mode
* 说明：picker 组件类型 
* 类型：String
* 可选值：
    * selector（单列） 
    * timeSelector（时间选择）
    * multiSelector（多列） 
    * multiLinkageSelector（级联）
* 是否必填： 否
* 默认值：selector

### pickerValueArray
* 说明：picker 渲染数据
* 类型：Array
* 可选值：-
* 是否必填： 是（当 mode 值为 timeSelector 不用填）
* 默认值：-

### pickerValueDefault
* 说明：picker 默认选中值 
* 类型：Array
* 可选值：-
* 是否必填： 否 (当同一个组件使用多种 mode 来回切换使用时 pickerValueDefault 必填)
* 默认值：[]
 
### deepLength
* 说明：几级联动
* 类型：Number
* 可选值：
  * 2
  * 3 
* 是否必填： 否
* 默认值：2

### onChange
* 说明：picker 组件滚动时回调，返回选中的 label, value 和数组索引 index 的值
* 类型：EventHandle
* 可选值：-
* 是否必填： 否
* 默认值：-

### onConfirm
* 说明：picker 组件点击确定时回调，返回选中的 label, value 和数组索引 index 的值
* 类型：EventHandle
* 可选值：-
* 是否必填： 否
* 默认值：-

### onCancel
* 说明：picker 组件点击取消时回调，返回选中的 label, value 和数组索引 index 的值
* 类型：EventHandle
* 可选值：-
* 是否必填： 否
* 默认值：-