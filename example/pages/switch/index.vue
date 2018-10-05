<template>
  <page-content title="Switch" desc="开关选择器，使用原生的 switch 组件，支持数据双向绑定">
    <mp-switch v-model="switchValue" @change="switchChange"></mp-switch>
  </page-content>
</template>

<script>
import mpSwitch from '../../../src/switch';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      switchValue: true
    };
  },
  components: {
    pageContent,
    mpSwitch
  },
  methods: {
    switchChange(e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>
