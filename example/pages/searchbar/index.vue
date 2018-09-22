<template>
  <page-content title="SearchBar" desc="搜索栏">
    <mp-searchbar></mp-searchbar>
  </page-content>
</template>

<script>
import mpSearchbar from '../../../src/searchbar';
import pageContent from '../../components/page-content';
export default {
  components: {
    mpSearchbar,
    pageContent
  }
};
</script>

<style>

</style>
