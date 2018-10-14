<template>
  <div class="weui-modal-content"></div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    cancelColor: {
      type: String,
      default: '#000000'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmColor: {
      type: String,
      default: '#3cc51f'
    }
  },
  methods: {
    show() {
      wx.showModal({
        title: this.title,
        content: this.content,
        showCancel: this.showCancel,
        cancelText: this.cancelText,
        cancelColor: this.cancelColor,
        confirmText: this.confirmText,
        confirmColor: this.confirmColor,
        success: (res) => {
          if (res.confirm) {
            this.$emit('confirm', res);
          } else {
            this.$emit('cancel', res);
          }
        },
        fail: (res) => {
          this.$emit('fail', res);
        },
        complete: (res) => {
          this.$emit('complete', res);
        }
      });
    }
  }
};
</script>

<style>
</style>
