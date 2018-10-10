# Checkbox

复选框，基于原生 `checkbox-group` 和 `checkbox` 组件，支持数据双向绑定。

<imgPreview imgUrl="/assets/checkbox.png"/>

### 引入

``` js
import mpCheckbox from 'mpvue-weui/checkbox';
export default {
  components: {
    mpCheckbox,
  },
}
```

### 使用

``` html
<mpCheckbox :list="checkboxAnimalsList" v-model="valueAnimals" @change="checkboxChange"></mpCheckbox>
```

``` js
...
data() {
  return {
    checkboxAnimalsList: [{ value: 'cat' }, { value: 'dog' }, { value: 'rabbit', disabled: true }],
    valueAnimals: ['dog']
  };
},
...
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| value | `checkbox` 选中的值，可使用 v-model 双向绑定数据 | `Array` | `[]` |
| list | `checkbox` 列表数据，必填 | `Array` | `-` |

::: tip list
list 的每一项为对象，有两个字段，`value`，复选框的值，也是要展示的值。`disabled`，是否禁用，这个字段非必填，默认为 `false`。
:::

### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @change| 复选框值发生变化时触发 | 返回 `value` |