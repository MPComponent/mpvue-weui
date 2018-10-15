<template>
  <div class="actionsheet"></div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      default: []
    }
  },
  methods: {
    show() {
      wx.showActionSheet({
        itemList: this.itemList,
        success: res => {
          let actionsheetObj = {
            tapIndex: res.tapIndex,
            tapLabel: this.itemList[res.tapIndex]
          };
          this.$emit('confirm', actionsheetObj);
        },
        fail: res => {
          this.$emit('cancel', res);
        },
        complete: () => {
          this.$emit('complete');
        }
      });
    }
  }
};
</script>

<style>
</style>
