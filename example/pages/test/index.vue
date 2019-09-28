<template>
  <div class="page">
    <page-content title="datepicker" desc="日期选择器，基于 picker 组件进行封装。">
      <div class="mpvue-date-picker">
        <button type="default" @click="showDatePicker">日期选择</button>
        <mp-datepicker ref="mpDatePicker" :themeColor="themeColor" :defaultDate="defaultDate" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel"></mp-datepicker>
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
      // defaultDate: new Date('2019-3-24'),
      defaultDate: [2019, 2, 25],
      themeColor: '#2B7489',
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
      this.datePickerObj = e;
      console.log(e);
    },
    onConfirm(e) {
      this.datePickerObj = e;
      console.log(e);
    },
    onCancel(e) {
      this.datePickerObj = e;
      console.log(e);
    }
  }
};
</script>
<style scoped>
.picker-text-content {
  padding: 20px;
}
</style>
