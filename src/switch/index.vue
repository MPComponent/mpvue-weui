<template>
  <div class="weui-switch-content">
    <switch :checked="switchValue" @change="change"></switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchValue: this.value
    };
  },
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(val) {
      this.switchValue = val;
    },
    switchValue(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    change(e) {
      this.switchValue = e.mp.detail.value;
      this.$emit('change', e.mp.detail.value);
    }
  }
};
</script>

<style>
</style>
