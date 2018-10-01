# Loading

加载组件

<imgPreview imgUrl="/assets/loading.png"/>

### 引入

``` js
import mpLoading from 'mpvue-weui/loading';
export default {
  components: {
    mpLoading,
  },
}
```

### 使用

``` html
<mp-loading :showLoading="isShowLoading" loadingText="加载中..." :mask="isShowMask"></mp-loading>
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| showLoading | 是否展示 `loading` 组件 | `Boolean` | `false` |
| loadingText | 加载提示文案 | `String` | 加载中 |
| mask | 是否显示蒙层 | `Boolean` | `true` |