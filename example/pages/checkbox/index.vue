<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Checkbox</div>
      <div class="page__desc">复选框</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="checkbox-demo-category">group-动物选择</div>
      <div class="checkbox-demo-block">
        <div class="checkbox-demo-title">
          <mpCheckbox :list="checkboxAnimalsList" v-model="valueAnimals" @change="checkboxChange"></mpCheckbox>
        </div>
      </div>
      <div>选中的动物：{{valueAnimals}}</div>
      <div class="checkbox-demo-category">checkbox-水果</div>
      <div class="checkbox-demo-block">
        <div class="checkbox-demo-title">
          <mpCheckbox :list="checkboxFruitList" v-model="valueFruit"></mpCheckbox>
        </div>
        <mp-button size="large" @click="toggleDisabled" btnClass="mt15 mb15">切换 disabled 状态</mp-button>
      </div>
    </div>
  </div>
</template>

<script>
import mpCheckbox from '../../../src/checkbox';
import mpButton from '../../../src/button';
export default {
  components: {
    mpCheckbox,
    mpButton
  },
  data() {
    return {
      checkboxAnimalsList: [{ value: 'cat' }, { value: 'dog' }, { value: 'rabbit', disabled: true }],
      valueAnimals: ['dog'],
      checkboxFruitList: [{ value: '西瓜', disabled: true }],
      valueFruit: []
    };
  },
  methods: {
    checkboxChange(e) {
      console.log(e);
    },
    toggleDisabled() {
      this.checkboxFruitList[0].disabled = !this.checkboxFruitList[0].disabled;
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
  padding-top: 20px;
  padding-bottom: 5px;
}
</style>
