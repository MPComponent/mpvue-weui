# Input

输入框，使用原生的 input 组件，支持数据双向绑定。

<imgPreview imgUrl="/assets/input.png"/>

### 引入

``` js
import mpInput from 'mpvue-weui/src/input';
export default {
  components: {
    mpInput,
  },
}
```

### 使用

``` html
<mp-input placeholder="数据双向绑定" v-model="inputValue" @focus="inputFocus"></mp-input>
```

### API

