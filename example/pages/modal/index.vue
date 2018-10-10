<template>
  <page-content title="Switch" desc="开关选择器，使用原生的 switch 组件，支持数据双向绑定。">
    <mp-modal ref="mpModal" :title="title" :content="content" :showCancel="true" cancelText='cancel' cancelColor="#3cc51f" confirmText="ok" confirmColor="#000000"></mp-modal>
    <mpButton size="large" @click="showModal">显示 modal</mpButton>
  </page-content>
</template>

<script>
import mpModal from '../../../src/modal';
import pageContent from '../../components/page-content';
import mpButton from '../../../src/button';
export default {
  data() {
    return {
      title: '标题',
      content: '内容'
    };
  },
  components: {
    pageContent,
    mpModal,
    mpButton
  },
  methods: {
    showModal() {
      this.$refs.mpModal.show();
    }
  }
};
</script>

<style scoped>
</style>
