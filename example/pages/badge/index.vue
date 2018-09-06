<template>
  <page-content title="Badge" desc="徽章">
    <div class="mb15">
      <div class="weui-article__h1">1.徽章--dot 靠右</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">单行列表</div>
          <mp-badge>
            <text>详细信息</text>
          </mp-badge>
        </div>
      </div>
    </div>
    <div class="mb15">
      <div class="weui-article__h1">2.徽章--dot 靠右上</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">单行列表</div>
          <mp-badge badgePos="right-top">
            <span class="text">详细信息</span>
          </mp-badge>
        </div>
      </div>
    </div>
    <div class="mb15">
      <div class="weui-article__h1">3.徽章--info 靠右</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__bd">单行列表</div>
          <mp-badge :dot=false :info=10>
            <label class="text">详细信息-info</label>
          </mp-badge>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd">单行列表</div>
          <mp-badge :dot=false info="new">
            <label class="text">详细信息-info</label>
          </mp-badge>
        </div>
      </div>
    </div>
    <div class="mb15">
      <div class="weui-article__h1">4.徽章--info 靠右上</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <mp-badge :dot=false :info=9 badgePos="right-top">
            <image src='/static/images/pic_160.png' class="badge-img" />
          </mp-badge>
          <div class="ml15">
            <div>联系人名称</div>
            <div style="font-size:13px; color: #888888">摘要信息</div>
          </div>
        </div>
      </div>
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
