<template>
  <page-content title="uploader" desc="图片上传组件">
    <mp-uploader @upLoadSuccess="upLoadSuccess" @upLoadFail="upLoadFail" @uploadDelete="uploadDelete" :showTip=false :count=2></mp-uploader>
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
      console.log(res);
    },
    uploadDelete(res) {
      console.log(res);
    }
  }
};
</script>

<style>
</style>
