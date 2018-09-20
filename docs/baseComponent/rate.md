# Badge

徽章

<imgPreview imgUrl="/assets/badge.png"/>

### 引入

``` js
import mpBadge from 'mpvue-weui/mpBadge';
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
