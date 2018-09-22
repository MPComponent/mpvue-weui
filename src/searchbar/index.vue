<template>
  <div class="weui-search-bar">
    <div class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
        <input type="text" class="weui-search-bar__input" :placeholder="placeholder" v-model="inputValue" :focus="isFocus" :confirm-type="confirmType" @input="input" @blur="blur" @focus="focus" @confirm="confirm" />
        <div class="weui-icon-clear" v-if="inputValue.length > 0" @click="clearInput">
          <icon type="clear" size="14"></icon>
        </div>
      </div>
      <label class="weui-search-bar__label" :hidden="isFocus" @click="showInput">
        <icon class="weui-icon-search" type="search" size="14"></icon>
        <div class="weui-search-bar__text">搜索</div>
      </label>
    </div>
    <div class="weui-search-bar__cancel-btn" :hidden="!isFocus" @click="hideInput">取消</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '搜索'
    },
    inputValue: {
      type: [String, Array, Boolean],
      default: ''
    },
    isFocus: {
      type: Boolean,
      default: false
    },
    confirmType: {
      type: String,
      default: 'done'
    }
  },
  methods: {
    showInput() {
      this.isFocus = true;
    },
    hideInput() {
      this.inputValue = '';
      this.isFocus = false;
    },
    clearInput() {
      this.inputValue = '';
    },
    input(e) {
      console.log(e);
      this.inputValue = e.mp.detail.value;
    },
    /* 输入框失去焦点时触发 */
    blur(e) {
      console.log('blur');
    },
    /* 输入框聚焦时触发 */
    focus(e) {
      console.log('focus');
    },
    /* 点击完成时触发 */
    confirm(e) {
      console.log('confirm');
      console.log(e);
    }
  }
};
</script>

<style>
</style>
