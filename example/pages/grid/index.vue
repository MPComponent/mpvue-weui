<template>
  <page-content title="Grid" desc="九宫格。">
    <div class="grid-content">
      <mp-grid :gridData="gridData"></mp-grid>
    </div>
  </page-content>
</template>

<script>
import mpGrid from '../../../src/grid';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      gridData: [
        { src: '/static/images/icon_nav_button.png', name: 'Button', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_cell.png', name: 'Cell', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_toast.png', name: 'Toast', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_dialog.png', name: 'Dialog', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_button.png', name: 'Progress', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_panel.png', name: 'Msg', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_article.png', name: 'Article', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_actionSheet.png', name: 'ActionSheet', url: '/pages/button/main' },
        { src: '/static/images/icon_nav_icons.png', name: 'Icons', url: '/pages/button/main' }
      ]
    };
  },
  components: {
    mpGrid,
    pageContent
  }
};
</script>

<style scoped>
</style>
