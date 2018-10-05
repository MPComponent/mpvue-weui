<template>
  <div class="weui-switch-content">
    <switch :checked="switchValue" :disabled="disabled" @change="change" :color="color"></switch>
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
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
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
