<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Checkbox</div>
      <div class="page__desc">复选框</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="checkbox-demo-category">单个复选框</div>
      <div class="checkbox-demo-block">
        <div class="checkbox-demo-title">
          <mpCheckbox :list="checkboxList" :value="value" @change="checkboxChange"></mpCheckbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mpCheckbox from '../../../src/checkbox';
export default {
  components: {
    mpCheckbox
  },
  data() {
    return {
      checkboxList: [{ value: 'cat' }, { value: 'dog' }, { value: 'rabbit' }, { value: 'pig' }, { value: 'horse' }],
      value: ['dog', 'pig']
    };
  },
  methods: {
    checkboxChange(e) {
      // console.log(e);
    }
  }
};
</script>

<style scoped>
.checkbox-demo-category {
  padding: 30px 0 0px;
}
.checkbox-demo-category:first-child {
  padding-top: 0;
}
.checkbox-demo-title {
  border-bottom: solid #d9d9d9 1px;
  padding-top: 20px;
  padding-bottom: 5px;
}
.checkbox-demo-block {
  font-size: 15px;
  border-bottom: solid #d9d9d9 1px;
}
</style>
