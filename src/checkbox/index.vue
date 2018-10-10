<template>
  <checkbox-group @change="checkboxChange" id="1" class="weui-checkbox-group">
    <label v-for="(item, index) in listRender" class="weui-checkbox" :key="index">
      <checkbox class="weui-checkbox-input" :value="item.value" type="checkbox" :checked="item.checked" :disabled="item.disabled || false" />
      <div class="weui-checkbox-icon">
        <icon v-show="item.checked!==true" class="weui-checkbox-icon-circle" type="circle" size="23" :class="item.disabled ? 'weui-checkbox-diabled': ''"></icon>
        <icon v-show="item.checked===true" class="weui-checkbox-icon-success" type="success" size="23" :class="item.disabled ? 'weui-checkbox-diabled': ''"></icon>
      </div>
      <div class="weui-checkbox-bd">{{item.value}}</div>
    </label>
  </checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      checkBoxValue: this.value
    };
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      required: true
    }
  },
  watch: {
    value(val) {
      this.checkBoxValue = val;
    }
  },
  computed: {
    listRender() {
      let renderData = this.list.map(item => {
        return { ...item, checked: false };
      });
      for (let i = 0; i < renderData.length; i++) {
        for (let j = 0; j < this.checkBoxValue.length; j++) {
          if (this.checkBoxValue[j] === renderData[i].value) {
            renderData[i].checked = true;
          }
        }
      }
      return renderData;
    }
  },
  methods: {
    checkboxChange(e) {
      this.checkBoxValue = e.mp.detail.value;
      this.$emit('input', e.mp.detail.value);
      this.$emit('change', this.checkBoxValue);
    }
  }
};
</script>

<style>
.weui-checkbox-group {
  border-top: 1rpx solid #ccc;
  border-bottom: 1rpx solid #ccc;
}
.weui-checkbox {
  padding: 10px 15px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.weui-checkbox:active {
  background-color: #ececec;
}
.weui-checkbox:first-child:before {
  display: none;
}
.weui-checkbox:before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1rpx solid #d9d9d9;
  color: #d9d9d9;
  left: 15px;
}
.weui-checkbox-diabled {
  opacity: 0.5;
}
.weui-checkbox-input {
  position: absolute;
  left: -9999px;
}
.weui-checkbox-icon {
  padding-right: 0.35em;
}

.weui-checkbox-icon-circle,
.weui-checkbox-icon-success {
  margin-left: 4.6px;
  margin-right: 4.6px;
}

.weui-checkbox-bd {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
</style>
