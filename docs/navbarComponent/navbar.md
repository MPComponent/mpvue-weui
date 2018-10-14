# Navbar

导航栏

<imgPreview imgUrl="/assets/navbar.png"/>

### 引入

``` js
import mpNavbar from 'mpvue-weui/src/navbar';
export default {
  components: {
    mpNavbar
  },
}
```

### 使用

``` html
<mp-navbar :tabs="tabs" activeIndex=0 @tabClick="tabClick"></mp-navbar>
```

### API
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| tabs | 导航栏显示的文案 | `Array` | - |
| activeIndex | 导航栏初始化选中值的索引 | `Number` | 0 |

### Event
| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @tabClick | 切换导航栏时触发，返回当前导航栏的索引值 | `index` |