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