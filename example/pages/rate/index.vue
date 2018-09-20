<template>
  <div>
    <page-content title="Rate" desc="星级评分">
      <div class="weui-cells__title">默认状态：5 颗星，值为 3</div>
      <mp-rate rateValue=3></mp-rate>
      <div class="weui-cells__title">大于 5 颗星: 10 颗星，值为 7.5</div>
      <mp-rate rateRange=10 rateValue=7.5></mp-rate>
      <div class="weui-cells__title">自定义大小: height: 20px; width:20px;</div>
      <mp-rate rateValue=4.5 rateClass="weui-rate-20"></mp-rate>
      <div class="weui-cells__title">支持点击:自定义显示内容</div>
      <mp-rate rateValue=4.5 @rateClick="rateClick" :isSupportClick=true></mp-rate>
    </page-content>
    <div class="weui-rate-value-desc">{{rateScore}}</div>
  </div>
</template>

<script>
import mpRate from '../../../src/rate';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      rateScore: '',
      rateScoreDesc: ['非常不满意，各方面都很差', '不满意，比较差', '一般，还需改善', '比较满意，仍可改善', '非常满意,无可挑剔']
    };
  },
  components: {
    pageContent,
    mpRate
  },
  methods: {
    rateClick(index) {
      console.log(index);
      this.rateScore = this.rateScoreDesc[index];
      console.log(this.rateScore);
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
.weui-rate-value-desc {
  padding: 15px;
}
</style>
