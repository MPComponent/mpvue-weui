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
  methods: {
    change(e) {
      this.switchValue = e.mp.detail.value;
      this.$emit('input', this.switchValue);
      this.$emit('change', this.switchValue);
    }
  }
};
</script>

<style>
</style>
