<template>
  <div class="weui-grids" v-if="gridData.length>0">
    <block v-for="(item,index) in gridData" :key="index">
      <navigator :url="item.url" class="weui-grid" hover-class="weui-grid_active">
        <image class="weui-grid__icon" :src="item.src" />
        <div class="weui-grid__label">{{item.name}}</div>
      </navigator>
    </block>
  </div>
</template>

<script>
export default {
  props: {
    gridData: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
</style>
