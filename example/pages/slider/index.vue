<template>
  <page-content title="" desc="滑块，这里采用小程序原生的slider。">
    <mp-slider step=5 showValue></mp-slider>
    <mp-slider min=10 max=30 step=5 showValue blockSize=20 backgroundColor="#000000"></mp-slider>
    <mp-slider value=10 showValue blockSize=20 @change="change" @changing="changing"></mp-slider>
  </page-content>
</template>

<script>
import mpSlider from '../../../src/slider';
import pageContent from '../../components/page-content';
export default {
  components: {
    pageContent,
    mpSlider
  },
  methods: {
    change(e) {
      console.log(e);
    },
    changing(e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>
