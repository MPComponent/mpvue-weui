# Grid

九宫格。

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
| gridData | 九宫格数据 | `Array` | [] |

* 数组每个字段代表的含义
  * src：导航图标的地址（建议图片放在 `/static` 目录下面，这样打包不会出现路径问题）
  * name：导航的名称
  * utl：跳转连接