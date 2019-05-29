<template>
  <div class="page">
    <page-content title="citypicker" desc="城市选择器，基于 picker 组件进行封装。">
      <div class="mpvue-city-picker">
        <button type="default" @click="showCityPicker">城市选择</button>
        <mp-citypicker ref="mpCityPicker" :pickerValueDefault="pickerValueDefault" themeColor='#2d8cf0' @onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm"></mp-citypicker>
      </div>
    </page-content>
    <div class="picker-text-content">
      <div class="picker-text">城市：{{citypickerObj.label}}</div>
      <div class="picker-text">code: {{citypickerObj.cityCode}}</div>
    </div>
  </div>
</template>

<script>
import mpCitypicker from '../../../src/city-picker';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      pickerValueDefault: [0, 0, 1],
      citypickerObj: {}
    };
  },
  components: {
    pageContent,
    mpCitypicker
  },
  methods: {
    showCityPicker() {
      this.$refs.mpCityPicker.show();
    },
    onChange(e) {
      console.log(e);
    },
    onCancel(e) {
      console.log(e);
    },
    onConfirm(e) {
      console.log(e);
      this.citypickerObj = e;
      console.log(this.citypickerObj.label);
    }
  }
};
</script>
<style scoped>
.picker-text-content {
  padding: 20px;
}
</style>
