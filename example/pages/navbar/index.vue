<template>
  <page-content title="navbar" desc="导航栏。">
    <mp-navbar :tabs="tabs" activeIndex=0 @tabClick="tabClick"></mp-navbar>
  </page-content>
</template>

<script>
import mpNavbar from '../../../src/navbar';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      tabs: ['选项一', '选项二', '选项三']
    };
  },
  components: {
    mpNavbar,
    pageContent
  },
  methods: {
    tabClick(index) {
      console.log(index);
    }
  }
};
</script>

<style>
</style>
