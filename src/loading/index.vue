<template>
  <div class="weui-loading-content" v-if="showLoading">
    <div class="weui-loading-mask" v-if="mask"></div>
    <div class="weui-loading-detail">
      <div class="weui-loading"></div>
      <div class="weui-loading-text">{{loadingText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLoading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '加载中'
    },
    mask: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    show() {
      this.showLoading = true;
    }
  }
};
</script>

<style>
.weui-loading-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.weui-loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
.weui-loading-detail {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 122px;
  height: 122px;
  background: rgba(17, 17, 17, 0.7);
  color: #fff;
  border-radius: 5px;
  text-align: center;
  z-index: 1001;
  transform: translate(-50%, -50%);
}
.weui-loading-detail .weui-loading {
  height: 38px;
  width: 38px;
  margin: 30px 0 0;
}
.weui-loading-text {
  margin: 10px 0 0 0;
  font-size: 16px;
}
</style>
