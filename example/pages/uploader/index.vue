<template>
  <page-content title="uploader" desc="图片上传组件">
    <mp-uploader @chooseImage="chooseImage" :showTip="false"></mp-uploader>
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
    chooseImage(e) {
      console.log(e);
      return; // eslint-disable-line
    }
  }
};
</script>

<style>
</style>
