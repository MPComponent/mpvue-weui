<template>
  <page-content title="ActionSheet" desc="弹出式菜单，采用小程序原生的actionsheet">
    <mp-button type="default" size="large" btnClass="mb15" @click="showActionsheet">show actionsheet</mp-button>
    <mp-actionsheet ref="actionsheet" :actions="actions"></mp-actionsheet>
  </page-content>
</template>

<script>
import mpActionsheet from '../../../src/actionsheet';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      actions: ['A', 'B', 'C']
    };
  },
  components: {
    pageContent,
    mpActionsheet
  },
  methods: {
    showActionsheet() {
      this.$refs.actionsheet.show();
    }
  }
};
</script>

<style>
</style>
