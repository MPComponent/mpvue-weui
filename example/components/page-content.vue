<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">{{title}}</div>
      <div class="page__desc">{{desc}}</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
};
</script>

<style>
</style>
