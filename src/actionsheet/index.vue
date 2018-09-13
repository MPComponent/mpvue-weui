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
        success: function (res) {
          console.log(res.tapIndex);
        }
      });
    }
  }
};
</script>

<style>
</style>
