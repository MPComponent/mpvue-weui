<template>
  <mpvue-picker ref="mpvuePicker" mode="dateSelector" :pickerValueDefault="defaultDate" :themeColor="themeColor" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel"></mpvue-picker>
</template>

<script>
import mpvuePicker from 'mpvue-picker';
export default {
  props: {
    /* 默认值 */
    defaultDate: {
      type: [Array, Date],
      default() {
        return [];
      }
    },
    /* 主题色 */
    themeColor: String
  },
  components: {
    mpvuePicker
  },
  methods: {
    show() {
      this.$refs.mpvuePicker.show();
    },
    onChange(e) {
      this.$emit('onChange', e);
    },
    onConfirm(e) {
      this.$emit('onConfirm', e);
    },
    onCancel(e) {
      this.$emit('onCancel', e);
    }
  }
};
</script>

<style>
</style>
