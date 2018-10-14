<template>
  <page-content title="Toast" desc="提示组件。">
    <mp-button @click="toastFun('default', '文字提示', 1500 )" btnClass="mr15">只显示文字提示</mp-button>
    <mp-button @click="toastFun('success', '操作成功提示文案', 1500 )">操作成功提示</mp-button>
    <mp-button @click="toastFun('warn', '操作警告提示文案', 1500 )" btnClass="mr15">操作警告提示</mp-button>
    <mp-button @click="toastFun('error', '操作失败提示文案', 1500 )" btnClass="mr15">操作失败提示</mp-button>
    <mp-button @click="toastFun('default', '提示将在 5s 后消失', 5000 )">自定义 toast 时间</mp-button>
    <mp-toast :type="toastType" v-model="showToast" :content="content" :duration="duration"></mp-toast>
  </page-content>
</template>

<script>
import mpToast from '../../../src/toast';
import pageContent from '../../components/page-content';
import mpButton from '../../../src/button';
export default {
  data() {
    return {
      showToast: false,
      toastType: 'default',
      content: '',
      duration: 1500
    };
  },
  components: {
    mpToast,
    pageContent,
    mpButton
  },
  methods: {
    toastFun(type, content, duration) {
      this.showToast = true;
      this.toastType = type;
      this.content = content;
      this.duration = duration;
    }
  }
};
</script>

<style>
</style>
