<template>
  <mpvue-picker ref="mpvuePicker" :mode="mode" :pickerValueArray="pickerValueArray" :pickerValueDefault="pickerValueDefault" :deepLength="deepLength" :themeColor="themeColor" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel"></mpvue-picker>
</template>

<script>
import mpvuePicker from 'mpvue-picker';
export default {
  props: {
    /* mode */
    mode: {
      type: String,
      default: 'selector'
    },
    /* picker 数值 */
    pickerValueArray: {
      type: Array,
      default() {
        return [];
      }
    },
    /* 默认值 */
    pickerValueDefault: {
      type: [Array, Date],
      default() {
        return [];
      }
    },
    /* 几级联动 */
    deepLength: {
      type: Number,
      default: 2
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
