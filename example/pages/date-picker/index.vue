<template>
  <div class="page">
    <page-content title="datepicker" desc="日期选择器，基于 picker 组件进行封装">
      <div class="mpvue-date-picker">
        <button type="default" @click="showDatePicker">城市选择</button>
        <mp-datepicker ref="mpDatePicker" :defaultDate="defaultDate"></mp-datepicker>
      </div>
    </page-content>
    <div class="picker-text-content">
    </div>
  </div>
</template>

<script>
import mpDatepicker from '../../../src/date-picker';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      defaultDate: [2017, 2, 15]
    };
  },
  components: {
    pageContent,
    mpDatepicker
  },
  methods: {
    showDatePicker() {
      this.$refs.mpDatePicker.show();
    }
  }
};
</script>
<style scoped>
.picker-text-content {
  padding: 20px;
}
</style>
