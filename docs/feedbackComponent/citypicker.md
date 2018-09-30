# CityPicker

城市选择器，数据来源于 [Administrative-divisions-of-China](https://github.com/modood/Administrative-divisions-of-China)。

<imgPreview imgUrl="/assets/city-picker.png"/>

### 引入

``` js
import mpCitypicker from 'mpvue-weui/city-picker';
export default {
  components: {
    mpCitypicker,
  },
}
```

### 使用

``` html
 <mp-citypicker ref="mpCityPicker" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm"></mp-citypicker>
```

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| pickerValueDefault | 设置默认城市  | `Array` | `[0, 0, 0]` |

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @onChange | 组件滚动时回调 | 返回选中的返回 label , value 以及 cityCode 的值 |
| @onConfirm | 组件点击确定时回调 | 返回选中的返回 label , value 以及 cityCode 的值 |
| @onCancel | 组件点击取消时回调 | 返回选中的返回 label , value 以及 cityCode 的值 |

::: tip cityCode
`cityCode ` 是城市的唯一编号。
:::