<template>
  <page-content title="loading" desc="加载组件。">
    <mp-loading :showLoading="isShowLoading" loadingText="加载中..." :mask="isShowMask"></mp-loading>
    <mp-button @click="showLoading" size="large" btnClass="mb15">打开 Loading</mp-button>
    <mp-button @click="showLoadingMask" size="large">打开 Loading (没有 mask)</mp-button>
  </page-content>
</template>

<script>
import mpLoading from '../../../src/loading';
import mpButton from '../../../src/button';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      isShowLoading: false,
      isShowMask: true
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
    },
    showLoadingMask() {
      this.isShowLoading = true;
      this.isShowMask = false;
      setTimeout(() => {
        this.isShowLoading = false;
      }, 5000);
    }
  }
};
</script>

<style>
</style>
