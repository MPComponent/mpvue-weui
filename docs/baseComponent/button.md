# Button

按钮，主要对原生 `<button>` 组件进行封装，并扩展了按钮的一些尺寸。

### 引入

``` js
import mpButton from 'mpvue-weui/button';
export default {
  components: {
    mpButton,
  },
}
```

### 使用

``` html
<mp-button type="default" size="large" btnClass="mb15">默认按钮</mp-button>
<mp-button type="default" size="large" btnClass="mb15" openType="getUserInfo" @getuserinfo="getuserinfo">获取用户信息</mp-button>
```

### API


| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| type | 按钮类型，可选值为 `primary` `warning` `danger` | `String` | `default` |
| size | 按钮尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |
| plain | 是否为朴素按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否显示为加载状态 | `Boolean` | `false` |
| block | 是否为块级元素 | `Boolean` | `false` |
| square | 是否为方形按钮 | `Boolean` | `false` |
| open-type | 微信开放能力 | `String` | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | `String` | - |
| hover-start-time | 按住后多久出现点击态，单位毫秒 | `Number` | 20 |
| hover-stay-time | 手指松开后点击态保留时间，单位毫秒 | `Number` | 70 |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | `String` | `en` |
| session-from | 会话来源 | `String` | - |
| send-message-title | 会话内消息卡片标题 | `String` | 当前标题 |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | `String` | 当前分享路径 |
| send-message-img | sendMessageImg | `String` | 截图 |
| show-message-card | 显示会话内消息卡片 | `String` | `false` |
