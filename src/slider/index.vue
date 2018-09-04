<template>
  <slider :min="min" :max="max" :step="step" :disabled="disabled" :value="value" :backgroundColor="backgroundColor" :activeColor="activeColor" :block-size="blockSize" :block-color="blockColor" :show-value="showValue" @change="change" @changing="changing" />
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0
    },
    activeColor: {
      type: String,
      default: '#1aad19',
      validator: function (value) {
        return (/^#(?:[0-9a-fA-F]{3}){1,2}$/).test(value);
      }
    },
    backgroundColor: {
      type: String,
      default: '#e9e9e9',
      validator: function (value) {
        return (/^#(?:[0-9a-fA-F]{3}){1,2}$/).test(value);
      }
    },
    blockSize: {
      type: Number,
      default: 28
    },
    blockColor: {
      type: String,
      default: '#ffffff',
      validator: function (value) {
        return (/^#(?:[0-9a-fA-F]{3}){1,2}$/).test(value);
      }
    },
    showValue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(e) {
      this.$emit('change', e);
    },
    changing(e) {
      this.$emit('changing', e);
    }
  }
};
</script>

<style>
</style>
