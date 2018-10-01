<template>
  <page-content title="loading" desc="加载组件">
    <mp-loading :showLoading="showLoading"></mp-loading>
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
      showLoading: false
    };
  },
  components: {
    mpLoading,
    pageContent,
    mpButton
  },
  methods: {
    showLoading() {
      this.showLoading = true;
    }
  }
};
</script>

<style>
</style>
