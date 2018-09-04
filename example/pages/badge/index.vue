<template>
  <page-content title="Badge" desc="徽章">
    <div class="weui-cells__title">新消息提示跟摘要信息后，统一在列表右侧</div>
    <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">单行列表</div>
          <div class="weui-cell__ft weui-cell__ft_in-access" style="font-size: 0">
            <div style="display: inline-block;vertical-align:middle; font-size: 17px;">详细信息</div>
            <mpBadge dot="true"></mpBadge>
          </div>
        </div>
      </div>
    <div class="weui-cells__title">未读数红点跟在主题信息后，统一在列表左侧</div>
    <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell">
          <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
            <image src="../../../static/images/pic_160.png" style="width: 50px; height: 50px; display: block"/>
            <mpBadge preset="header">8</mpBadge>
          </div>
          <div class="weui-cell__bd">
            <div>联系人名称</div>
            <div style="font-size: 13px;color: #888888;">摘要信息</div>
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <div style="display: inline-block; vertical-align: middle">单行列表</div>
            <mpBadge preset="body">8</mpBadge>
          </div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <div style="display: inline-block; vertical-align: middle">单行列表</div>
            <mpBadge preset="body">8</mpBadge>
          </div>
          <div class="weui-cell__ft weui-cell__ft_in-access">详细信息</div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">
            <div style="display: inline-block; vertical-align: middle">单行列表</div>
            <mpBadge preset="body">New</mpBadge>
          </div>
          <div class="weui-cell__ft weui-cell__ft_in-access"></div>
        </div>
      </div>
  </page-content>
</template>

<script>
import mpBadge from '../../../src/badge';
import pageContent from '../../components/page-content';
export default {
  components: {
    mpBadge,
    pageContent
  },
  methods: {
  }
};
</script>

<style scoped>

</style>
