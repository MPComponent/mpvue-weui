<template>
    <input class="weui-input" :value="inputValue" @input="input" @focus="focus" :type="type" :password="password" @blur="blur" @confirm="confirm"
    :placeholder="placeholder" :placeholder-style="placeholderStyle" :placeholder-class="placeholderClass" 
    :disabled="disabled" :maxlength="maxlength" :cursor-spacing="cursorSpacing" :focus="focus" :confirm-type="confirmType"
    :confirm-hold="confirmHold" :adjust-position="adjustPosition" />
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
    },
    password: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    placeholderStyle: {
      type: String,
      default: ''
    },
    placeholderClass: {
      type: String,
      default: 'placeholder-class'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 140
    },
    cursorSpacing: {
      type: [Number, String],
      default: 0
    },
    focus: {
      type: Boolean,
      default: false
    },
    confirmType: {
      type: String,
      default: 'done'
    },
    confirmHold: {
      type: Boolean,
      default: false
    },
    adjustPosition: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    input(e) {
      this.inputValue = e.mp.detail.value;
      this.$emit('input', this.inputValue);
    },
    focus(e) {
      this.$emit('focus', this.inputValue);
    },
    blur(e) {
      this.$emit('blur', this.inputValue);
    },
    confirm(e) {
      this.$emit('confirm', this.inputValue);
    }
  }
};
</script>

<style>
</style>
