# Input

输入框，使用原生的 input 组件，支持数据双向绑定。

<imgPreview imgUrl="/assets/input.png"/>

### 引入

``` js
import mpInput from 'mpvue-weui/src/input';
export default {
  components: {
    mpInput,
  },
}
```

### 使用

``` html
<mp-input placeholder="数据双向绑定" v-model="inputValue" @focus="inputFocus"></mp-input>
```

### API
| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| value | 输入框的初始内容, 支持双向绑定 | `String` | - |
| type | input 的类型,可选值：text，number，idcard，digit | `String` | `text` |
| password | 是否是密码类型 | `Boolean` | `false` |
| placeholder | 输入框为空时占位符 | `String` | - |
| placeholderStyle | 指定 placeholder 的样式 | `String` | - |
| placeholderClass | 指定 placeholder 的样式类 | `String` | `input-placeholder` |
| disabled | 是否禁用 | `Boolean` |  `false` |
| maxlength | 最大输入长度，设置为 -1 的时候不限制最大长度 | `Number` | `140` |
| cursorSpacing | 指定光标与键盘的距离，单位px（ 版本库2.4.0起支持 rpx ）。 | `Number 或者 String`  | `0` |
| focus | 获取焦点 | `Boolean` | `false` |
| confirmType | 设置键盘右下角按钮的文字，仅在type='text'时生效 | `String` | `done` |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | `Boolean` | `false` |
| adjustPosition | 键盘弹起时，是否自动上推页面 | `Boolean` | `true` |

##### 参数相关说明
* confirmType
  * send：右下角按钮为“发送”
  * search：右下角按钮为“搜索”
  * next： 右下角按钮为“下一个”
  * go：右下角按钮为“前往”
  * done： 右下角按钮为“完成”


### Event
| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @input | 键盘输入时触发 | 返回输入框内容 |
| @focus | 输入框聚焦时触发 | 返回输入框内容 |
| @blur | 输入框失去焦点时触发 | 返回输入框内容 |
| @confirm | 点击完成按钮时触发 | 返回输入框内容 |