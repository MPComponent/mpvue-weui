<template>
  <page-content title="Toast" desc="提示组件">
    <mp-button @click="toastText">只显示文字提示</mp-button>
    <mp-toast :type="toastType" v-model="showToast"></mp-toast>
  </page-content>
</template>

<script>
import mpToast from '../../../src/toast';
import pageContent from '../../components/page-content';
import mpButton from '../../../src/button';
export default {
  data() {
    return {
      showToast: false,
      toastType: 'default'
    };
  },
  components: {
    mpToast,
    pageContent,
    mpButton
  },
  methods: {
    toastText() {
      this.showToast = true;
    }
  }
};
</script>

<style>
</style>
