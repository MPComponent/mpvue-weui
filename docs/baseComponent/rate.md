# Rate

星级评分

<imgPreview imgUrl="/assets/rate.png"/>

### 引入

``` js
import mpRate from 'mpvue-weui/rate';
export default {
  components: {
    mpRate,
  },
}
```

### 使用

``` html
<!-- 默认状态 -->
<mp-rate rateValue=3 @rateClick="rateClick"></mp-rate>

<!-- 通过自定义 class 改变 rate 组件大小 -->
<mp-rate rateValue=4.5 rateClass="weui-rate-20"></mp-rate>

```

### API
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| rateRange | 需要展示星星的个数(整数) | `Number` | 5 |
| rateValue | 评分的值，支持小数 | `Number` | 0 |
| rateClass | 评分组件自定义 `class`,一般用于改变组件大小 | `String` | '' |

::: tip
`rateClass` 设置的 `class` 需要写在全局样式中，如果写在耽搁模板的样式里面，那么不要给 `<style></style>` 加 `scoped`属性。
:::

### 事件

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| rateClick:click | 点击评分组件时触发，返回点击的组件的索引值 | `index` |

::: tip
该功能一般用于点击zu jian an
:::