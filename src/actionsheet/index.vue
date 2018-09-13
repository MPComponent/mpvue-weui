<template>
  <div class="actionsheet"></div>
</template>

<script>
export default {
  props: {
    actions: {
      type: Array,
      default: []
    }
  },
  methods: {
    show() {
      wx.showActionSheet({
        itemList: this.actions,
        success: res => {
          let actionsheetObj = {
            tapIndex: res.tapIndex,
            tapLabel: this.actions[res.tapIndex]
          };
          this.$emit('confirm', actionsheetObj);
        },
        fail: res => {
          this.$emit('cancel');
        }
      });
    }
  }
};
</script>

<style>
</style>
