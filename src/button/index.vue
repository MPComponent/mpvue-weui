<template>
  <button :class="buttonClass" :type="type" :plain="plain" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    },
    plain: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnClass: {
      type: Array,
      default: false
    }
  },
  computed: {
    buttonClass() {
      let buttonClass = `weui-btn weui-btn-${this.size} ${this.btnClass}`;
      return buttonClass;
    }
  }
};
</script>

<style>
.weui-btn {
  display: inline-block;
}
.weui-btn-large {
  display: block;
}
.weui-btn-normal {
  height: 44px;
  line-height: 44px;
  padding: 0 15px;
  font-size: 14px;
}
.weui-btn-small {
  height: 30px;
  padding: 0 8px;
  min-width: 60px;
  font-size: 12px;
  line-height: 30px;
}
.weui-btn-mini {
  height: 22px;
  line-height: 22px;
  font-size: 10px;
}
</style>
