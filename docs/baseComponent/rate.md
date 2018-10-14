# Rate

星级评分。

<imgPreview imgUrl="/assets/rate.png"/>

### 引入

``` js
import mpRate from 'mpvue-weui/src/rate';
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

<!-- 支持点击 -->
<mp-rate rateValue=4.5 @rateClick="rateClick" :isSupportClick=true></mp-rate>
```

``` js
export default {
  data() {
    return {
      rateScoreText: '',
      rateScoreDesc: ['非常不满意，各方面都很差', '不满意，比较差', '一般，还需改善', '比较满意，仍可改善', '非常满意,无可挑剔']
    };
  },
  // some code
  methods: {
    rateClick(index) {
      this.rateScoreText = this.rateScoreDesc[index];
    }
  }
};
```

### API
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| rateRange | 需要展示星星的个数(整数) | `Number` | 5 |
| rateValue | 评分的值，支持小数 | `Number` | 0 |
| rateClass | 评分组件自定义 `class`,一般用于改变组件大小 | `String` | - |
| isSupportClick | 是否支持点击 | `Boolean` | `false` |

::: tip
`rateClass` 设置的 `class` 需要写在全局样式中，如果写在单个模板的样式里面，那么不要给 `<style></style>` 加 `scoped`属性。
:::

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @rateClick | 点击评分组件时触发，返回点击组件的索引值 | `index` |

::: tip
该功能一般用于点击评分，根据返回的 `index` 来显示对应的文案。
:::