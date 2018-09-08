<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Mpvue-WeUI</div>
      <div class="page__desc">Mpvue-WeUI 是基于 mpvue 框架，同微信原生视觉体验一致的基础样式库，为微信小程序量身设计，令用户的使用感知更加统一。</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <div class="kind-list">
        <div v-for="(item1,index1) in list" :key="index1">
          <div class="kind-list__item">
            <div :id=item1.id :class="{'kind-list__item-hd_show':item1.open}" class="weui-flex,kind-list__item-hd" @click="kindToggle">
              <div class="weui-flex__item">{{item1.name}}</div>
              <img class="kind-list__img" :src=" '/static/images/icon_nav_'+item1.id+'.png'">
            </div>
            <div :class="{'kind-list__item-bd_show':item1.open}" class="kind-list__item-bd">
              <div :class="{'weui-cells_show':item1.open}" class="weui-cells">
                <div v-for="(item2,index2) in item1.pages" :key="index2">
                  <navigator class="weui-cell weui-cell_access" :url=" '/pages/'+item2+'/'+'main'+ ''">
                    <div class="weui-cell__bd">{{item2}}</div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                  </navigator>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 'form',
          name: '表单',
          open: false,
          pages: ['button', 'slider']
        },
        {
          id: 'widget',
          name: '基础组件',
          open: false,
          pages: [
            'badge'
          ]
        },
        {
          id: 'feedback',
          name: '操作反馈',
          open: false,
          pages: ['picker', 'city-picker']
        },
        {
          id: 'nav',
          name: '导航相关',
          open: false,
          pages: []
        },
        {
          id: 'search',
          name: '搜索相关',
          open: false,
          pages: []
        }
      ]
    };
  },

  components: {},

  methods: {
    kindToggle(e) {
      var id = e.currentTarget.id;
      var list = this.list;
      for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id === id) {
          list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
      }
      this.list = list;
    }
  },

  created() { }
};
</script>

<style scoped>
/*!
 * WeUI v1.1.1 (https://github.com/weui/weui-wxss)
 * Copyright 2017 Tencent, Inc.
 * Licensed under the MIT license
 */

.weui-flex {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.weui-cells {
  margin-top: 0;
  opacity: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.weui-cells:after,
.weui-cells:before {
  display: none;
}

.weui-cells_show {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.weui-cell:before {
  right: 15px;
}

.kind-list__item {
  margin: 10px 0;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
}

.kind-list__item:first-child {
  margin-top: 0;
}

.kind-list__img {
  width: 30px;
  height: 30px;
}

.kind-list__item-hd {
  padding: 20px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.kind-list__item-hd_show {
  opacity: 0.4;
}

.kind-list__item-bd {
  height: 0;
  overflow: hidden;
}

.kind-list__item-bd_show {
  height: auto;
}
</style>
