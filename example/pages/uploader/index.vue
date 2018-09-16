<template>
  <page-content title="uploader" desc="图片上传组件">
    <mp-uploader @upLoadSuccess="upLoadSuccess" @upLoadFail="upLoadFail" :showTip="false" :count=1></mp-uploader>
  </page-content>
</template>

<script>
import mpUploader from '../../../src/uploader';
import pageContent from '../../components/page-content';
export default {
  components: {
    mpUploader,
    pageContent
  },
  methods: {
    upLoadSuccess(res) {
      console.log(res);
    },
    upLoadFail(res) {
      console.log('上传失败' + JSON.stringify(res));
    }
  }
};
</script>

<style>
</style>
