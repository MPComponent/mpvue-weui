<template>
  <label class="weui-badge-relative">
    <slot></slot>
    <div v-if="dot && isShowBadge && !info" :class="badgeDotClass"></div>
    <div v-if="info && isShowBadge && !dot" :class="badgeInfoClass">{{info}}</div>
  </label>
</template>

<script>

export default {
  props: {
    isShowBadge: {
      type: Boolean,
      default: true
    },
    dot: {
      type: Boolean,
      default: true
    },
    info: {
      type: [Number, String],
      default: 0
    },
    badgePos: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    badgeDotClass() {
      return this.badgePos === 'right' ? 'weui-badge-dot weui-badge-dot-right' : 'weui-badge-dot weui-badge-dot-right-top';
    },
    badgeInfoClass() {
      return this.badgePos === 'right' ? 'weui-badge-info weui-badge-info-right' : 'weui-badge-info weui-badge-info-right-top';
    }
  }
};
</script>

<style>
.weui-badge-relative {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.weui-badge-dot {
  width: 10px;
  height: 10px;
  background-color: #e64340;
  border-radius: 20px;
}
.weui-badge-dot-right-top {
  position: absolute;
  top: -2px;
  right: -10px;
}
.weui-badge-dot-right {
  display: inline-block;
  margin-left: 5px;
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
