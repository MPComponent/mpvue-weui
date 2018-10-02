<template>
  <div class="weui-toast-content">
    <div class="weui-toast-detail" :class="type==='default'? '' : 'weui-toast-detail-icon'">
      <div class="toast-icon" v-if="type!='default'">
        <icon type="success" size="40" v-if="type==='success'"></icon>
        <icon type="warn" size="40" color="#FFBE00" v-if="type==='warn'"></icon>
        <icon type="cancel" size="40" v-if="type==='error'"></icon>
      </div>
      <div class="toast-text">支付成功</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
};
</script>

<style scoped>
.weui-toast-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.weui-toast-detail {
  position: absolute;
  padding: 5px 15px;
  top: 50%;
  left: 50%;
  background: rgba(17, 17, 17, 0.7);
  color: #fff;
  border-radius: 5px;
  text-align: center;
  z-index: 1001;
  transform: translate3d(-50%, -50%, 0);
  white-space:nowrap;
}
.weui-toast-detail-icon {
  min-width: 115px;
  height: 115px;
}
.weui-toast-detail .toast-icon {
  height: 40px;
  width: 40px;
  margin: 15px auto 20px;
}
.toast-icon .toast-icon-success {
  height: 100%;
  background-size: 100% 100%;
  background-image: url(data:image/png;base64,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)
}
</style>
