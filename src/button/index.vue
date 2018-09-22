<template>
  <button :class="buttonClass" :type="type" :plain="plain" :disabled="disabled" :loading="loading" :open-type="openType" :app-parameter="appParameter" :hover-start-time="hoverStartTime" :hover-stay-time="hoverStayTime" :lang="lang" :session-from="sessionFrom" :send-message-title="sendMessageTitle" :send-message-path="sendMessagePath" :send-message-img="sendMessageImg" :show-message-card="showMessageCard" @click="click" @getuserinfo="getuserinfo" @contact="contact" @getphonenumber="getphonenumber" @error="error">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
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
      type: String,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    openType: {
      type: String,
      default: ''
    },
    appParameter: {
      type: String,
      default: ''
    },
    hoverStartTime: {
      type: Number,
      default: 20
    },
    hoverStayTime: {
      type: Number,
      default: 70
    },
    lang: {
      type: String,
      default: 'en'
    },
    sessionFrom: {
      type: String,
      default: ''
    },
    sendMessageTitle: {
      type: String,
      default: ''
    },
    sendMessagePath: {
      type: String,
      default: ''
    },
    sendMessageImg: {
      type: String,
      default: ''
    },
    showMessageCard: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      let buttonClass = `weui-btn weui-btn-${this.size} ${this.btnClass}`;
      return buttonClass;
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e);
    },
    getuserinfo(e) {
      this.$emit('getuserinfo', e);
    },
    contact(e) {
      this.$emit('contact', e);
    },
    getphonenumber(e) {
      this.$emit('getphonenumber', e);
    },
    error(e) {
      this.$emit('error', e);
    }
  }
};
</script>

<style scoped>
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
  font-size: 16px;
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
