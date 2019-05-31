<template>
  <mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" :themeColor="themeColor" @onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
</template>

<script>
import mpvueCityPicker from 'mpvue-citypicker';
export default {
  data() {
    return {};
  },
  components: {
    mpvueCityPicker
  },
  props: {
    /* 默认值 */
    pickerValueDefault: {
      type: Array,
      default: [0, 0, 0]
    },
    themeColor: {
      type: String,
      default: '#1aad19'
    }
  },
  methods: {
    show() {
      this.$refs.mpvueCityPicker.show();
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
