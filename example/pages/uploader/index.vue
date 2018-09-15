<template>
  <page-content title="uploader" desc="图片上传组件">
    <mp-uploader></mp-uploader>
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
  }
};
</script>

<style>

</style>
