<template>
  <page-content title="loading" desc="加载组件">
    <mp-loading ref="mpLoading" :showLoading="isShowLoading" loadinText="加载中..."></mp-loading>
    <mp-button @click="showLoading" size="large">打开 Loading</mp-button>
  </page-content>
</template>

<script>
import mpLoading from '../../../src/loading';
import mpButton from '../../../src/button';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      isShowLoading: false
    };
  },
  components: {
    mpLoading,
    pageContent,
    mpButton
  },
  methods: {
    showLoading() {
      this.isShowLoading = true;
      setTimeout(() => {
        this.isShowLoading = false;
      }, 5000);
      // this.$refs.mpLoading.show();
    }
  }
};
</script>

<style>
</style>
