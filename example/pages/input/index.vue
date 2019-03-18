<template>
  <div>
    <page-content title="Input" desc="输入框，使用原生的 input 组件，支持数据双向绑定。">
      <div class="weui-cells__title">数据双向绑定：{{inputValue}}</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-input placeholder="数据双向绑定" v-model="inputValue" @focus="inputFocus"></mp-input>
      </div>
      <div class="weui-cells__title">控制最大输入长度的 input</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-input placeholder="最大输入长度为10" :maxlength=10></mp-input>
      </div>
      <div class="weui-cells__title">数字输入的 input</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-input placeholder="这是一个数字输入框" type="number"></mp-input>
      </div>
      <div class="weui-cells__title">密码输入的 input</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-input placeholder="这是一个密码输入框" :password="true"></mp-input>
      </div>
      <div class="weui-cells__title">带小数点的 input</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-input placeholder="这是一个带带小数点的数字键盘" type="digit"></mp-input>
      </div>
      <div class="weui-cells__title">身份证输入的 input</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-input placeholder="身份证输入键盘" type="idcard"></mp-input>
      </div>
      <div class="weui-cells__title">控制占位符颜色的 input</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-input placeholder="占位符字体为红色" placeholderStyle="color: red"></mp-input>
      </div>
    </page-content>
  </div>
</template>

<script>
import mpInput from '../../../src/input';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      inputValue: ''
    };
  },
  components: {
    mpInput,
    pageContent
  },
  methods: {
    inputFocus(value) {
      console.log(`focus:${value}`);
    },
    blur(value) {
      console.log(`blur:${value}`);
    },
    confirm(value) {
      console.log(`confirm:${value}`);
    }
  }
};
</script>

<style>
.placeholder-class-test {
  padding-left: 10px;
}
.page__bd_spacing {
  padding: 0 0 30px;
}
.weui-cells {
  padding: 0 30rpx;
}
</style>
