<template>
  <page-content>
      <div class="button-content">
        <mp-button type="default" size="large" btnClass="mb15">默认按钮</mp-button>
        <mp-button type="primary" size="large">主要按钮</mp-button>
        <mp-button type="warn" size="large">警告按钮</mp-button>
        <mp-button type="primary" size="normal">普通按钮</mp-button>
        <mp-button type="primary" size="small">小型按钮</mp-button>
        <mp-button type="primary" size="mini">迷你按钮</mp-button>
        <mp-button type="primary" size="large" disabled=true>大型按钮</mp-button>
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

<style>
</style>
