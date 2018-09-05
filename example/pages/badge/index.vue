<template>
  <page-content title="Badge" desc="徽章">
    <div class="mb15">
      <div class="weui-article__h1">1.徽章--dot 靠右</div>
      <mp-badge>
        <span class="text">徽章测试</span>
      </mp-badge>
    </div>
    <div class="mb15">
      <div class="weui-article__h1">2.徽章--dot 靠右上</div>
      <mp-badge badgePos="right-top">
        <span class="text">徽章测试</span>
      </mp-badge>
    </div>
    <div class="mb15">
      <div class="weui-article__h1">3.徽章--info 靠右</div>
      <mp-badge :dot=false :info=10>
        <label class="text">徽章测试-icon</label>
      </mp-badge>
    </div>
    <div class="mb15">
      <div class="weui-article__h1">4.徽章--info 靠右上</div>
      <mp-badge :dot=false :info=9 badgePos="right-top">
        <image src='/static/img/pic_160.png' class="badge-img" />
      </mp-badge>
    </div>
  </page-content>
</template>

<script>
import mpBadge from '../../../src/badge';
import pageContent from '../../components/page-content';
export default {
  components: {
    pageContent,
    mpBadge
  },
  methods: {
  }
};
</script>

<style scoped>
.badge-img {
  width: 50px;
  height: 50px;
}
</style>
