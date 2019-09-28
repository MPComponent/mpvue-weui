# Uploader

图片上传组件，基于 `wx.chooseImage` 和 `wx.previewImage` 实现。

<imgPreview imgUrl="/assets/uploader.png"/>

### 引入

```js
import mpUploader from 'mpvue-weui/src/uploader'
export default {
  components: {
    mpUploader
  }
}
```

### 使用

```html
<mp-uploader @upLoadSuccess="upLoadSuccess" @upLoadFail="upLoadFail" @uploadDelete="uploadDelete" :showTip=false :count=1></mp-uploader>
```

### API

| 参数		       | 说明                  | 类型      | 默认值  |
| ---------			| ----------------------| ---------| ------- |
| maxLength			| 最多能上传图片的张数     | `Number` | `20`    |
| showTip			| 是否显示图片上传剩余张数 | `Boolean` | `false` |
| count				| 最多可以选择的图片张数   | `Number` | `9`     |
| isMaxHiddenChoose	| 是否在最大上传数时隐藏选择按钮| `Boolean` | `false` |
| initialFileList	| 初始化图片地址列表 | `Array` | `[]` |


### Event

| 事件名         | 说明               | 参数         |
| -------------- | ------------------ | ------------ |
| @upLoadSuccess | 图片上传成功时触发 | `successRes` |
| @upLoadFail    | 图片上传失败时触发 | `failRes`    |
| @uploadDelete  | 删除上传图片时触发 | `DeleteRes`  |
| @complete      | 调用接口完成时回调 | -            |

##### 参数相关说明

* successRes：

  * errMsg：回调消息
  * files：已上传图片的本地临时文件路径
  * tempFilePaths：图片的本地临时文件路径列表
  * tempFiles：图片的本地临时文件列表
    * path：本地临时文件路径
    * size：本地临时文件大小，单位 B

* failRes：

  * errMsg：回调消息

* DeleteRes：
  * files：已上传图片的链接（不包含已删除的图片）
  * index：删除图片在 `files` 中的索引
  * src：删除图片的本地临时路径

### 扩展方法

* clearFiles: 清空已上传文件，示例如下：

```html
<mp-uploader ref="uploader"></mp-uploader>
```

```js
// 清空已上传文件
this.$refs.uploader.clearFiles()
```
