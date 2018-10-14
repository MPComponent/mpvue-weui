# Modal

<imgPreview imgUrl="/assets/modal.png"/>

### 引入

``` js
import mpModal from 'mpvue-weui/modal';
export default {
  components: {
    mpModal,
  },
}
```

### 使用

``` html
<mp-modal ref="mpModal" :title="title" :content="content" :showCancel="true" @confirm="confirm" @cancel="cancel"></mp-modal>
```

``` js
/* 调用组件的 `show` 方法显示 modal */
this.$refs.mpModal.show();
``` 

# API
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| title | 提示的标题，必填  | `String` | - |
| content | 提示的内容，必填  | `String` | - |
| showCancel | 是否显示取消按钮  | `Boolean` | `true` |
| cancelText | 取消按钮的文字，最多 4 个字符  | `String` | `取消` |
| cancelColor | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串  | `String` | `#000000` |
| confirmText | 确认按钮的文字，最多 4 个字符  | `String` | `确定` |
| confirmColor | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串  | `String` | `#3cc51f` |

### Event
| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @confirm | 点击确定时回调 | `object`|
| @cancel | 点击取消时回调 | `object` |
| @fail | 接口调用失败时回调 | `object` |
| @complete | 调用接口完成时回调 | `object` |

##### `object` 参数说明
* object
  * errMsg: 提示信息
  * cancel: 为 true 时，表示用户点击了取消按钮
  * confirm：为 true 时，表示用户点击了确定按钮
  