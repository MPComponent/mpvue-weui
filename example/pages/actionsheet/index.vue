<template>
  <div class="page">
    <page-content title="ActionSheet" desc="弹出式菜单，采用小程序原生的actionsheet">
      <mp-button type="default" size="large" btnClass="mb15" @click="showActionsheet">show actionsheet</mp-button>
      <mp-actionsheet ref="actionsheet" :actions="actions" @confirm="confirm" @cancel="cancel"></mp-actionsheet>
    </page-content>
    <div class="page-info">
      <div class="page__title">选中的信息为：</div>
      <div class="page__desc">{{actionsheetText}}</div>
    </div>
  </div>
</template>

<script>
import mpActionsheet from '../../../src/actionsheet';
import mpButton from '../../../src/button';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      actions: ['A', 'B', 'C'],
      actionsheetText: ''
    };
  },
  components: {
    pageContent,
    mpActionsheet,
    mpButton
  },
  methods: {
    showActionsheet() {
      this.$refs.actionsheet.show();
    },
    confirm(e) {
      console.log(e);
      this.actionsheetText = `tapIndex: ${e.tapIndex}, 点击的值为： ${e.tapLabel}`;
    },
    cancel() {
      console.log('cancel');
      this.actionsheetText = '点击了取消';
    }
  }
};
</script>

<style>
</style>
