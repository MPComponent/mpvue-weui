<template>
  <span :class="badgeClass">
    <slot></slot>
  </span>
</template>

<script>
  const presetClass = {
    default: '',
    header: 'weui-badge_header',
    body: 'weui-badge_body',
    footer: 'weui-badge_footer'
  };

  export default {
    props: {
      dot: {
        type: Boolean,
        default: false
      },
      preset: {
        type: String,
        default: 'default'
      }

    },
    computed: {
      badgeClass() {
        let classStr = this.dot ? 'weui-badge_dot' : presetClass[this.preset];
        return `weui-badge ${classStr}`;
      }
    }
  };
</script>

<style>
  .weui-badge {
    display: inline-block;
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
  .weui-badge_dot {
    padding: 0.4em;
    min-width: 0;
    margin-left: 5px;
    margin-right: 5px;
  }
  .weui-badge_header{
    position: absolute;
    top: -.4em;
    right: -.4em;
  }
  .weui-badge_body{
    margin-left: 5px;
  }
  .weui-badge_footer{
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
