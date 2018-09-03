<template>
  <page-content>
    <div class="button-content">
      <mp-button type="default" size="large" btnClass="mb15">默认按钮</mp-button>
      <mp-button type="primary" size="large" btnClass="mb15">主要按钮</mp-button>
      <mp-button type="warn" size="large" btnClass="mb15">警告按钮</mp-button>
      <mp-button type="defualt" size="normal" btnClass="mb15 mr15" plain>默认按钮</mp-button>
      <mp-button type="primary" size="normal" btnClass="mb15 mr15" plain>主要按钮</mp-button>
      <mp-button type="warn" size="normal" btnClass="mb15" plain>警告按钮</mp-button>
      <mp-button type="primary" size="normal" btnClass="mb15 mr15">普通按钮</mp-button>
      <mp-button type="primary" size="small" btnClass="mb15 mr15">小型按钮</mp-button>
      <mp-button type="primary" size="mini" btnClass="mb15">迷你按钮</mp-button>
      <mp-button type="primary" size="large" btnClass="mb15" disabled>禁用按钮</mp-button>
      <mp-button type="primary" size="large" btnClass="mb15" loading>加载按钮</mp-button>
    </div>
  </page-content>
</template>

<script>
import mpButton from '../../../src/button';
import pageContent from '../../components/page-content';
/* import { mpButton } from '../../../src/index.js'; */
export default {
  components: {
    mpButton,
    pageContent
  }
};
</script>

<style scoped>
.hover-class {
  color: aqua;
}
</style>
