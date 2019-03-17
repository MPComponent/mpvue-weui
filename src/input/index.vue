<template>
  <div class="weui-input-content">
    <input class="weui-input" :value="inputValue" @input="input" :type="type"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: this.value
    };
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    input(e) {
      this.inputValue = e.mp.detail.value;
      this.$emit('input', this.inputValue);
      this.$emit('change', this.inputValue);
    }
  }
};
</script>

<style>
</style>
