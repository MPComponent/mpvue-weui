<template>
  <div>
    <page-content title="Input" desc="输入框，使用原生的 input 组件，支持数据双向绑定。">
      <mp-input v-model="value" @input="input" @focus="focus" @confirm="confirm" @blur="blur" :type="type" :placeholder="placeholder"
      :placeholderStyle="placeholderStyle" :placeholderClass="placeholderClass" :maxlength=10 confirmType="完成"
      ></mp-input>
    </page-content>
  </div>
</template>

<script>
import mpInput from '../../../src/input';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      value: 'test-demo',
      type: 'text',
      password: true,
      placeholder: '请输入...',
      placeholderStyle: 'color: red',
      placeholderClass: 'placeholder-class-test',
      disabled: true
    };
  },
  components: {
    mpInput,
    pageContent
  },
  methods: {
    input(value) {
      console.log(`example:${this.value}`);
    },
    focus(value) {
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
</style>
