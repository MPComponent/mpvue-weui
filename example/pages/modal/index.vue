<template>
  <page-content title="Modal" desc="对话框，采用小程序原生的 modal 。">
    <mp-modal ref="mpModal" :title="title" :content="content" :showCancel="true"></mp-modal>
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
