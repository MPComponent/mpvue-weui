<template>
  <page-content title="" desc="滑块，这里采用小程序原生的slider。">
    <mp-slider></mp-slider>
  </page-content>
</template>

<script>
import mpSlider from '../../../src/slider';
import pageContent from '../../components/page-content';
export default {
  components: {
    pageContent,
    mpSlider
  }
};
</script>

<style>
</style>
