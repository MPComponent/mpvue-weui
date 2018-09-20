<template>
  <page-content title="Rate" desc="星级评分">
    <div class="weui-cells__title">默认状态：5 颗星，值为 3</div>
    <mp-rate rateValue=3 @rateClick="rateClick"></mp-rate>
    <div class="weui-cells__title">大于 5 颗星: 10 颗星，值为 7.5</div>
    <mp-rate rateRange=10 rateValue=7.5></mp-rate>
    <div class="weui-cells__title">自定义大小: height: 20px; width:20px;</div>
    <mp-rate rateValue=4.5 rateClass="weui-rate-20"></mp-rate>
  </page-content>
</template>

<script>
import mpRate from '../../../src/rate';
import pageContent from '../../components/page-content';
export default {
  components: {
    pageContent,
    mpRate
  },
  methods: {
    rateClick(index) {
      console.log(index);
    }
  }
};
</script>

<style>
.weui-rate-20 {
  height: 20px !important;
  width: 20px !important;
}
.weui-cells__title {
  padding-left: 0;
}
</style>
