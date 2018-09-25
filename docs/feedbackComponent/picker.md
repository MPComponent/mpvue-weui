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
