<template>
  <page-content title="uploader" desc="图片上传组件，基于 `wx.chooseImage` 和 `wx.previewImage` 实现。">
    <mp-uploader ref="uploader" @upLoadSuccess="upLoadSuccess" @upLoadFail="upLoadFail" @upLoadComplete="upLoadComplete" @uploadDelete="uploadDelete" :showTip=false :count=2></mp-uploader>
    <div class="clear-files">
      <mp-button size='small' @click="clearFiles">清空已上传文件</mp-button>
    </div>
  </page-content>
</template>

<script>
import mpUploader from '../../../src/uploader';
import mpButton from '../../../src/button';
import pageContent from '../../components/page-content';
export default {
  components: {
    mpUploader,
    mpButton,
    pageContent
  },
  methods: {
    upLoadSuccess(res) {
      console.log(res);
    },
    upLoadFail(res) {
      console.log(res);
    },
    upLoadComplete() {
      console.log('complete');
    },
    uploadDelete(res) {
      console.log(res);
    },
    clearFiles() {
      this.$refs.uploader.clearFiles();
    }
  }
};
</script>

<style>
</style>
