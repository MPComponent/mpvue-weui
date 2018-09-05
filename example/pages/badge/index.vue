<template>
  <page-content title="Badge" desc="徽章">
    <mp-badge>
      <span class="text">徽章测试</span>
    </mp-badge>
    <div class="mb15">
      <mp-badge dot=false info=10>
        <label class="text">徽章测试-icon</label>
      </mp-badge>
    </div>
    <div class="mb15">
      <mp-badge infoPos="right-top">
        <image src='/static/img/pic_160.png' class="badge-img" />
      </mp-badge>
    </div>
  </page-content>
</template>

<script>
import mpBadge from '../../../src/badge';
import pageContent from '../../components/page-content';
export default {
  components: {
    pageContent,
    mpBadge
  },
  methods: {
  }
};
</script>

<style scoped>
.badge-img {
  width: 50px;
  height: 50px;
}
</style>
