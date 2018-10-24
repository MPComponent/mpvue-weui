<template>
  <page-content title="SearchBar" desc="搜索栏">
    <mp-searchbar :isFocus=true v-model="inputValue" :placeholder="placeholder" @on-input="input" @blur="blur" @focus="focus" @confirm="confirm"></mp-searchbar>
  </page-content>
</template>

<script>
import mpSearchbar from '../../../src/searchbar';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      inputValue: 'searchbar demo',
      placeholder: '点击搜索'
    };
  },
  components: {
    mpSearchbar,
    pageContent
  },
  methods: {
    input(e) {
      console.log('on-input:' + e.mp.detail.value);
    },
    blur(e) {
      console.log('blur[value]:' + e.mp.detail.value);
    },
    focus(e) {
      console.log('focus[value]:' + e.mp.detail.value);
    },
    confirm(e) {
      console.log('confirm[value]:' + e.mp.detail.value);
    }
  }
};
</script>

<style>
</style>
