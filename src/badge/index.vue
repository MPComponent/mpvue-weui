<template>
  <label class="weui-badge-relative">
    <slot></slot>
    <div v-if="Boolean(dot)" class="weui-badge-dot"></div>
    <div v-if="info" :class="badgeClass">{{info}}</div>
  </label>
</template>

<script>

export default {
  props: {
    dot: {
      type: Boolean,
      default: true
    },
    info: {
      type: Number,
      default: 0
    },
    infoPos: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    badgeClass() {
      return this.infoPos === 'right' ? 'weui-badge-info weui-badge-info-right' : 'weui-badge-info weui-badge-info-right-top';
    }
  }
};
</script>

<style>
.weui-badge-relative {
  position: relative;
  display: inline-block;
}
.weui-badge-dot {
  position: absolute;
  top: -2px;
  right: -10px;
  width: 10px;
  height: 10px;
  background-color: #e64340;
  border-radius: 20px;
}
.weui-badge-info {
  padding: 0.15em 0.4em;
  min-width: 8px;
  border-radius: 18px;
  background-color: #e64340;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
}
.weui-badge-info-right {
  display: inline;
  margin-left: 5px;
}
.weui-badge-info-right-top {
  position: absolute;
  top: -0.4em;
  right: -0.4em;
}
</style>
