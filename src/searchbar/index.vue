<template>
  <div class="weui-search-bar">
    <div class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
        <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputValue" :focus="inputShowed" @input="inputTyping" />
        <div class="weui-icon-clear" v-if="inputValue.length > 0" @click="clearInput">
          <icon type="clear" size="14"></icon>
        </div>
      </div>
      <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
        <icon class="weui-icon-search" type="search" size="14"></icon>
        <div class="weui-search-bar__text">搜索</div>
      </label>
    </div>
    <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style>
</style>
