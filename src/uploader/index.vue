<template>
  <div class="weui-uploader">
    <div class="weui-uploader__hd" v-if="showTip">
      <div class="weui-uploader__title">图片上传</div>
      <div class="weui-uploader__info">{{files.length}}/{{maxLength}}</div>
    </div>
    <div class="weui-uploader__bd">
      <div class="weui-uploader__files" id="uploaderFiles">
        <div v-for="(item ,index) in files" :key="index">
          <div class="weui-uploader__file">
            <image class="weui-uploader__img" :src="item" mode="aspectFill" @click="predivImage" :id="item" />
            <div class="delete-icon" @click="deleteImg" :id="item"></div>
          </div>
        </div>
      </div>
      <div class="weui-uploader__input-box">
        <div class="weui-uploader__input" @click="chooseImage"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: []
    };
  },
  props: {
    maxLength: {
      type: Number,
      default: 20
    },
    showTip: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    chooseImage(e) {
      let _this = this;
      this.$emit('chooseImage', e);
      if (!(this.files.length > this.maxLength - 1)) {
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            _this.files = _this.files.concat(res.tempFilePaths);
            _this.$emit('upLoadSuccess', res);
          },
          fail: function (res) {
            _this.$emit('upLoadFail', res);
            // 修改提交记录
          },
          complete: function (res) {
          }
        });
      } else {
        wx.showToast({
          title: `最多上传 ${this.maxLength} 张图片`,
          icon: 'none',
          mask: true
        });
      }
    },
    predivImage(e) {
      console.log(e);
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.files // 需要预览的图片http链接列表
      });
    },
    deleteImg(e) {
      Array.prototype.indexOf = function (val) { // eslint-disable-line
        for (let i = 0; i < this.length; i++) {
          if (this[i] === val) return i;
        }
        return -1;
      };
      Array.prototype.remove = function (val) { // eslint-disable-line
        let index = this.indexOf(val);
        if (index > -1) {
          this.splice(index, 1);
        }
      };
      this.files.remove(e.currentTarget.id);
    }
  }
};
</script>

<style>
.weui-uploader__file {
  position: relative;
}
.weui-uploader__bd {
  overflow: visible;
}
.delete-icon {
  position: absolute;
  width: 40rpx;
  height: 40rpx;
  background: #f43530;
  right: 0;
  top: -20rpx;
  border-radius: 40rpx;
  z-index: 5;
}
.delete-icon::before {
  content: '';
  width: 26rpx;
  height: 4rpx;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}
</style>
