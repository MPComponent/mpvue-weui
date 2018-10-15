# Badge

徽章。

<imgPreview imgUrl="/assets/badge.png"/>

### 引入

``` js
import mpBadge from 'mpvue-weui/src/badge';
export default {
  components: {
    mpBadge,
  },
}
```

### 使用

``` html
<mp-badge>
  <text>详细信息</text>
</mp-badge>

<mp-badge :dot=false :info=9 badgePos="right-top">
  <image src='/static/images/pic_160.png' class="badge-img" />
</mp-badge>
```

### 说明

* 要显示徽章的元素必须写在 ` <mp-badge /> `里面（会以 `slot` 的形式进行替换)。
* 要显示徽章的元素必须是行内元素，如果是块状元素，可通过 ` display: inline-block `进行设置。

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| isShowBadge | 是否显示徽章（在业务中根据是否需要来显示） | `Boolean` | `true` |
| dot | 显示形式是否为圆点 | `Boolean` | `true` |
| info | 徽章显示的内容 | `[Number, String]` | 0 |
| badgePos | 位置，可选值为 `right，right-top`| `String` | `right` |

::: tip
如果设置了 `info` 的值，那么 `dot` 的值需要设置为 `false`，否则不会显示。
:::