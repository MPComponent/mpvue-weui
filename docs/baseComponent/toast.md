# Toast

提示组件

<imgPreview imgUrl="/assets/toast.png"/>

``` js
import mpToast from 'mpvue-weui/toast';
export default {
  components: {
    mpToast,
  },
}
```

### 使用

``` html
<mp-toast :type="toastType" v-model="showToast" :content="content" :duration="duration"></mp-toast>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| value | 是否展示 `toast` 组件 | `Boolean` | `false` |
| type | 提示类型 | `String`，可选值（`success`,`warn`,`error`） | `default` |
| content | 提示内容 | `String || Array` | - |
| duration | 提示持续时间（ms）| `Number` | `1500` |

::: tip value
`value` 支持数据双向绑定，可通过使用 `v-model` 实现。
:::