<template>
  <div class="weui-toast-content" v-show="showToast">
    <div class="weui-toast-detail" :class="type==='default'? '' : 'weui-toast-detail-icon'">
      <div class="toast-icon" v-if="type!='default'">
        <icon type="success" size="40" v-if="type==='success'"></icon>
        <icon type="warn" size="40" color="#FFBE00" v-if="type==='warn'"></icon>
        <icon type="cancel" size="40" v-if="type==='error'"></icon>
      </div>
      <div class="toast-text">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showToast: this.value
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    content: {
      type: [String, Number],
      default: ''
    },
    duration: {
      type: Number,
      default: 1500
    }
  },
  watch: {
    value(val) {
      this.showToast = val;
    },
    showToast(val) {
      if (val) {
        this.timer = setTimeout(() => {
          this.showToast = false;
        }, this.duration);
      }
      this.$emit('input', val);
    }
  }
};
</script>

<style scoped>
.weui-toast-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.weui-toast-detail {
  position: absolute;
  padding: 5px 15px;
  top: 50%;
  left: 50%;
  background: rgba(17, 17, 17, 0.7);
  color: #fff;
  border-radius: 5px;
  text-align: center;
  z-index: 1001;
  transform: translate3d(-50%, -50%, 0);
  white-space: nowrap;
  animation: showToast 0.4s;
}
.weui-toast-detail-icon {
  min-width: 115px;
  height: 115px;
}
.weui-toast-detail .toast-icon {
  height: 40px;
  width: 40px;
  margin: 15px auto 20px;
}
.weui-toast-detail .toast-text {
  font-size: 16px;
}
@-webkit-keyframes showToast {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes showToast {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
