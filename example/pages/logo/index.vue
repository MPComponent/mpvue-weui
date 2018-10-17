<template>
  <page-content title="扫码体验">
    <div class="img-content">
      <img src="https://user-images.githubusercontent.com/20694238/47097108-453cae00-d263-11e8-9cd6-5c7c41ad0678.jpg">
    </div>
  </page-content>
</template>

<script>
import pageContent from '../../components/page-content';
export default {
  components: {
    pageContent
  }
};
</script>

<style scoped>
.img-content {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
}
.img-content img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
