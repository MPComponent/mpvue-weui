# Slider

滑块，这里采用小程序原生的slider。

<imgPreview imgUrl="/assets/slider.png"/>

### 引入

``` js
import mpSlider from 'mpvue-weui/slider';
export default {
  components: {
    mpSlider,
  },
}
```

### 使用

``` html
<!-- 默认状态 -->
<mp-slider step=5 showValue></mp-slider>

<!-- 设置 Slider 相关属性 -->
<mp-slider min=10 max=30 step=5 showValue blockSize=20 backgroundColor="#000000"></mp-slider>

<!-- 绑定相关 Event -->
<mp-slider value=10 showValue blockSize=20 @change="change" @changing="changing"></mp-slider>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| min | 滑块最小值 | `Number` | `0` |
| max | 滑块最大值 | `Number` | `100` |
| disabled | 是否禁用 | `Boolean` | `false` |
| value | 当前取值 | `Number` | `0` |
| activeColor | 已选择的颜色 | `String` | `#1aad19` |
| backgroundColor | 背景条的颜色 | `String` | `#e9e9e9` |
| blockSize | 滑块的大小，取值范围为 12 - 28 | `Number` | - |
| blockColor | 滑块的颜色 | `String` | `#ffffff` |
| showValue | 是否显示当前 value | `Boolean` | `false` |


### Event
| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @change| 完成一次拖动后触发的事件，event.mp.detail = {value: value} | event |
| @changing | 拖动过程中触发的事件，event.mp.detail = {value: value} | event |