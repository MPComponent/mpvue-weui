<template>
  <div class="page">
    <page-content title="datepicker" desc="日期选择器，基于 picker 组件进行封装">
      <div class="mpvue-date-picker">
        <button type="default" @click="showDatePicker">日期选择</button>
        <mp-datepicker ref="mpDatePicker" :defaultDate="defaultDate" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel"></mp-datepicker>
      </div>
    </page-content>
    <div class="picker-text-content">
      <div class="picker-text">所选日期: {{datePickerObj.label}}</div>
    </div>
  </div>
</template>

<script>
import mpDatepicker from '../../../src/date-picker';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      defaultDate: [2017, 2, 15],
      datePickerObj: {}
    };
  },
  components: {
    pageContent,
    mpDatepicker
  },
  methods: {
    showDatePicker() {
      this.$refs.mpDatePicker.show();
    },
    onChange(e) {
      // console.log('onChange');
      this.datePickerObj = e;
      // console.log(e);
    },
    onConfirm(e) {
      // console.log('onConfirm');
      this.datePickerObj = e;
      // console.log(e);
    },
    onCancel(e) {
      // console.log('onCancel');
      this.datePickerObj = e;
      // console.log(e);
    }
  }
};
</script>
<style scoped>
.picker-text-content {
  padding: 20px;
}
</style>
