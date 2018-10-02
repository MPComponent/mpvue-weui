<template>
  <page-content title="Toast" desc="提示组件">
    <mp-toast iconType="error"></mp-toast>
  </page-content>
</template>

<script>
import mpToast from '../../../src/toast';
import pageContent from '../../components/page-content';
export default {
  components: {
    mpToast,
    pageContent
  }
};
</script>

<style>
</style>
