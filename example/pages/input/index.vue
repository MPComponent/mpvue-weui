<template>
  <div>
    <page-content title="Input" desc="输入框，使用原生的 input 组件，支持数据双向绑定。">
      <mp-input v-model="value" @input="input" :type="type"></mp-input>
      
    </page-content>
  </div>
</template>

<script>
import mpInput from '../../../src/input';
import pageContent from '../../components/page-content';
export default {
  data() {
    return {
      value: 'test-input',
      type: 'number'
    };
  },
  components: {
    mpInput,
    pageContent
  },
  methods: {
    input(value) {
      console.log(`example:${this.value}`);
    }
  }
};
</script>
