# Grid

九宫格

<imgPreview imgUrl="/assets/grid.png"/>

### 引入

``` js
import mpGrid from 'mpvue-weui/grid';
export default {
  components: {
    mpGrid,
  },
}
```

### 使用

``` html
<div class="grid-content">
  <mp-grid :gridData="gridData"></mp-grid>
</div>
```

``` js
export default {
  ...
  data() {
    return {
      gridData: [
        { src: '/static/images/icon_nav_button.png', name: 'Button', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_cell.png', name: 'Cell', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_toast.png', name: 'Toast', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_dialog.png', name: 'Dialog', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_button.png', name: 'Progress', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_panel.png', name: 'Msg', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_article.png', name: 'Article', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_actionSheet.png', name: 'ActionSheet', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_icons.png', name: 'Icons', url: '/pages/button/main' }
      ]
    };
  },
}
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| isShowBadge | 是否显示徽章（在业务中根据是否需要来显示） | `Boolean` | `true` |
| dot | 显示形式是否为圆点 | `Boolean` | `true` |
| info | 徽章显示的内容 | `[Number, String]` | 0 |
| badgePos | 位置，可选值为 `right，right-top`| `String` | `right` |