<template>
  <div class="page">
    <page-content title="datepicker" desc="日期选择器，基于 picker 组件进行封装">
      <div class="mpvue-date-picker">
        <mp-datepicker :defaultDate=[2016,2,19]></mp-datepicker>
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
    };
  },
  components: {
    pageContent,
    mpDatepicker
  },
  methods: {
  }
};
</script>
<style scoped>
.picker-text-content {
  padding: 20px;
}
</style>
