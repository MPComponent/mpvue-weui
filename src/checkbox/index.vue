<template>
    <checkbox-group @change="checkboxChange" :id="id">
        <label  v-for="(item, index) in optionsRender" class="weui-checkbox" :key="index">
          <checkbox class="weui-checkbox-input" :value="item.value||item.name" type="checkbox" :checked="item.checked" :disabled="item.disabled" />
          <div class="weui-checkbox-icon">
            <icon v-show="item.checked!==true" class="weui-checkbox-icon-circle" type="circle" size="23"></icon>
            <icon  v-show="item.checked===true" class="weui-checkbox-icon-success" type="success" size="23"></icon>
          </div>
          <div class="weui-checkbox-bd">{{item.name}}</div>
        </label>
    </checkbox-group>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: []
    },
    max: {
      type: Number,
      default: 0
    },
    id: ''
  },
  computed: {
    optionsRender() {
      let renderData = this.options.map((item) => {
        if (!item.value) {
          item = {
            value: item,
            name: item
          };
        }
        item.checked = false;
        item.disabled = false;
        let judge = this.value.filter((val) => {
          return val === item.value;
        });

        if (judge.length > 0) {
          item.checked = true;
        } else {
          if (this.max > 0 && this.value.length >= this.max) {
            item.disabled = true;
          }
        }
        return item;
      });
      return renderData;
    }
  },
  methods: {
    checkboxChange(e) {
      this.$emit('change', e);
    }
  }
};
</script>

<style>
  .weui-checkbox{
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
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1rpx solid #d9d9d9;
    color: #d9d9d9;
    left: 15px;
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
