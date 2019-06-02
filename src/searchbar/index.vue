<template>
  <div class="weui-search-bar">
    <div class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
        <input type="text" class="weui-search-bar__input" :placeholder="placeholder" v-model="inputValue" :focus="isFocusData" :confirm-type="confirmType" @input="input" @blur="blur" @focus="focus" @confirm="confirm" />
        <div class="weui-icon-clear" v-if="inputValue.length > 0" @click="clearInput">
          <icon type="clear" size="14"></icon>
        </div>
      </div>
      <label class="weui-search-bar__label" :hidden="isFocusData" @click="showInput">
        <icon class="weui-icon-search" type="search" size="14"></icon>
        <div class="weui-search-bar__text">搜索</div>
      </label>
    </div>
    <div class="weui-search-bar__cancel-btn" :hidden="!isFocusData" @click="hideInput">取消</div>
  </div>
</template>
ß
<script>
export default {
  data() {
    return {
      inputValue: this.value,
      isFocusData: this.isFocus
    };
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    isFocus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    confirmType: {
      type: String,
      default: 'done'
    }
  },
  watch: {
    value(val) {
      this.inputValue = val;
    },
    inputValue(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    showInput() {
      this.isFocusData = true;
    },
    hideInput() {
      this.inputValue = '';
      this.isFocusData = false;
    },
    clearInput() {
      this.inputValue = '';
    },
    /* 键盘输入时触发 */
    input(e) {
      this.$emit('on-input', e);
    },
    /* 输入框失去焦点时触发 */
    blur(e) {
      this.$emit('blur', e);
    },
    /* 输入框聚焦时触发 */
    focus(e) {
      this.$emit('focus', e);
    },
    /* 点击完成时触发 */
    confirm(e) {
      this.$emit('confirm', e);
    }
  }
};
</script>

<style>
</style>
