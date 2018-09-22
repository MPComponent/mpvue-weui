<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Checkbox</div>
      <div class="page__desc">复选框</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="checkbox-demo-category">单个复选框</div>
      <div class="checkbox-demo-block">
        <div class="checkbox-demo-title">{{ checkbox1.title }} (最多选择{{ checkbox1.max }}项)</div>
        <mpCheckbox :options="checkbox1.options" :value="checkbox1.value" :max="checkbox1.max" @change="checkbox1Change"></mpCheckbox>
      </div>

      <div class="checkbox-demo-category">多个复选框</div>
      <div v-for="(checkbox, index) in checkboxArr" class="checkbox-demo-block" :key="index">
        <div class="checkbox-demo-title">{{ checkbox.title }} (最多选择{{ checkbox.max }}项)</div>
        <mpCheckbox :options="checkbox.options" :value="checkbox.value" :max="checkbox.max" @change="checkboxArrChange" :id="index"></mpCheckbox>
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
      checkbox1: {
        title: '选择动物',
        options: ['cat', 'dog', 'rabbit', 'pig', 'horse'],
        value: ['cat', 'dog'],
        max: 3
      },
      checkboxArr: [
        {
          title: '选择饮料',
          options: ['water', 'milk', 'coffee', 'beer'],
          value: ['water', 'coffee'],
          max: 2
        },
        {
          title: '选择水果',
          options: ['apple', 'orange', 'banana', 'grape', 'pear'],
          value: ['banana', 'pear'],
          max: 3
        }
      ]
    };
  },
  methods: {
    checkbox1Change(e) {
      this.checkbox1.value = e.target.value;
      console.log(this.checkbox1);
    },
    checkboxArrChange(e) {
      let target = e.target;
      this.checkboxArr[target.id].value = target.value;
      console.log(this.checkboxArr);
    }
  }
};
</script>

<style scoped>

  .checkbox-demo-category{
    padding: 30px 0 0px;
  }
  .checkbox-demo-category:first-child{
    padding-top: 0;
  }
  .checkbox-demo-title{
    border-bottom: solid #d9d9d9 1px;
    padding-top: 20px;
    padding-bottom: 5px;
  }
  .checkbox-demo-block{
    font-size: 15px;
    border-bottom: solid #d9d9d9 1px;
  }

</style>
