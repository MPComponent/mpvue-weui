<template>
  <div class="weui-tab">
    <div class="weui-navbar">
      <div v-for="(item,index) in tabs" :key="index" :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
        <div class="weui-navbar__title">{{item}}</div>
      </div>
    </div>
    <div class="weui-navbar-content__slider">
      <div class="weui-navbar-slider" v-for="(item,index) in tabs" :key="index">
        <div class="weui-navbar-slider-inner" :class="{'weui-navbar-slider-on':activeIndex == index}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: []
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    tabClick(e) {
      this.activeIndex = Number(e.currentTarget.id);
      this.$emit('tabClick', this.activeIndex);
    }
  }
};
</script>

<style scoped>
.weui-tab {
  border-bottom: 1rpx solid #ccc;
}
.weui-navbar {
  position: relative;
  border: none;
}
.weui-tab__content {
  padding-top: 60px;
  text-align: center;
}
.weui-navbar-content__slider {
  display: flex;
}
.weui-navbar-slider {
  flex: 1;
}
.weui-navbar-slider-inner {
  height: 6rpx;
  width: 80%;
  margin: 0 auto;
  transition: all 0.3s;
}
.weui-navbar-slider-on {
  background-color: #1aad19;
}
</style>
