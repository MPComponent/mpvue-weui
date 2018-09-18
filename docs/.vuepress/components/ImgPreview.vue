<template>
  <div class="img-wrap" :class="">
    <img :src="$withBase(imgUrl)" :class="isShowImg?'':'img-hide'" />
    <a class="op-btn" @click="toggleShowImg">{{isShowImg?'隐藏图片':'显示图片'}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowImg: true
    }
  },
  props: {
    imgUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleShowImg() {
      this.isShowImg = !this.isShowImg;
    }
  }
}
</script>

<style lang="stylus">
.img-wrap {
  position: fixed;
  top: 5.5rem;
  right: 4rem;
  height: 504px;
  width: 280px;
  z-index: 99;

  img {
    width: 100%;
    transition: all 0.3s ease-in;
  }

  .img-hide {
    transform: translateX(200%);
  }

  .op-btn {
    width: 70px;
    height: 30px;
    float: right;
    margin-top: 10px;
    font-size: 13px;
    color: #fff;
    background-color: #64B587;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
