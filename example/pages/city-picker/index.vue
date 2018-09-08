<template>
  <div class="mpvue-city-picker">
    <button type="default" @click="showCityPicker">城市选择</button>
    <mp-citypicker ref="mpCityPicker" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onCancel="onCancel" @onConfirm="onConfirm"></mp-citypicker>
  </div>
</template>

<script>
import mpCitypicker from '../../../src/city-picker';
export default {
  data() {
    return {
      pickerValueDefault: [0, 0, 1]
    };
  },
  components: {
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
    }
  }
};
</script>
<style>
</style>
