<template>
  <page-content title="Rate" desc="星级评分">
    <mp-rate rateClass="weui-rate-20"></mp-rate>
    <mp-rate rateClass="weui-rate-20"></mp-rate>
  </page-content>
</template>

<script>
import mpRate from '../../../src/rate';
import pageContent from '../../components/page-content';
export default {
  components: {
    pageContent,
    mpRate
  }
};
</script>

<style>
.weui-rate-20 {
  height: 20px !important;
  width: 20px !important;
}
</style>
