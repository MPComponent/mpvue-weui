<template>
  <div>
    <page-content title="Switch" desc="开关选择器，使用原生的 switch 组件，支持数据双向绑定。">
    </page-content>
    <div class="padding15">
      <div class="mb15">
        <label>1.{{switchValue? '已选中':'未选中'}}</label>
      <mp-switch v-model="switchValue" @change="switchChange"></mp-switch>
      </div>
      <div class="mb15">
        <label>2.已禁用：</label>
      <mp-switch :disabled=true></mp-switch>
      </div>
      <label>3.自定义颜色</label>
      <mp-switch color="#4E8BC8"></mp-switch>
    </div>
  </div>

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

<style scoped>
.weui-switch-value-desc {
  padding: 15px;
}
</style>
