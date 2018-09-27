# Picker

选择器，基于 `picker-view` 和 `picker-view-column` 实现，来自于 [mpvue-picker](https://github.com/MPComponent/mpvue-picker)。

<imgPreview imgUrl="/assets/picker.png"/>

### 引入

``` js
import mpPicker from 'mpvue-weui/picker';
export default {
  components: {
    mpPicker,
  },
}
```

### 使用

``` html
<button type="default" @click="showMulLinkageTwoPicker">二级联动选择</button>
<mp-picker ref="mpPicker" :mode="mode" :deepLength=deepLength :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mp-picker>
```

``` js
export default {
  ...
  data() {
    return {
      mode: 'multiLinkageSelector',
      pickerValueArray: [
        {
          label: '飞机票',
          value: 100,
          children: [
            {
              label: '经济舱',
              value: 101
            },
            {
              label: '商务舱',
              value: 102
            }
          ]
        },
        {
          label: '火车票',
          value: 200,
          children: [
            {
              label: '卧铺',
              value: 210
            },
            {
              label: '坐票',
              value: 202
            },
            {
              label: '站票',
              value: 203
            }
          ]
        },
        {
          label: '汽车票',
          value: 300,
          children: [
            {
              label: '快班',
              value: 301
            },
            {
              label: '普通',
              value: 302
            }
          ]
        }
      ],
      pickerValueDefault: [1, 0]
    };
  },
  methods: {
    showMulLinkageTwoPicker() {
      this.$refs.mpPicker.show();
    },
    onConfirm(e) {
      console.log(e);
    },
    onChange(e) {
      console.log(e);
    },
    onCancel(e) {
      console.log(e);
    }
  }
};
```

### 初始化

在父组件中调用 ` mpPicker` 实例中的 `show` 方法：

``` javascript
this.$refs.mpPicker.show();
```

### API

| 参数 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| mode | picker 组件类型  | `String` | `selector` |
| pickerValueArray | picker 渲染数据 | `Array` | `-` |
| pickerValueDefault | picker 默认选中值  | `Array` | `[]` |
| deepLength | 几级联动 | `Number` | `2` |


### 参数说明

#### mode
* 可选值：
    * selector（单列） 
    * timeSelector（时间选择）
    * multiSelector（多列） 
    * multiLinkageSelector（级联）
* 是否必填： 否

#### pickerValueArray

* 是否必填： 是（当 mode 值为 timeSelector 不用填）

#### pickerValueDefault

* 是否必填： 否 (当同一个组件使用多种 mode 来回切换使用时 pickerValueDefault 必填)
 

 ### Event

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| @onChange | 组件滚动时回调 | 返回选中的 label, value 和数组索引 index 的值 |
| @onConfirm | 组件点击确定时回调 | 返回选中的 label, value 和数组索引 index 的值 |
| @onCancel | 组件点击取消时回调 | 返回选中的 label, value 和数组索引 index 的值 |



### 相关数据结构说明

#### **单列**
<details>
<summary>点击展开单列数据结构</summary>

``` javascript
pickerValueArray: [
  {
    label: '住宿费',
    value: 1
  },
  {
    label: '活动费',
    value: 2
  },
  {
    label: '通讯费',
    value: 3
  },
  {
    label: '补助',
    value: 4
  }
],
```
</details>


#### **多列**
<details>
<summary>点击展开多列数据结构</summary>

``` javascript
pickerMulArray: [
  [
    { label: '中国', value: 1 },
    { label: '美国', value: 2 },
    { label: '日本', value: 3 },
    { label: '俄罗斯', value: 4 }
  ],
  [
    { label: '茶', value: 1 },
    { label: '咖啡', value: 2 },
    { label: '寿司', value: 3 },
    { label: '奶酪', value: 4 }
  ],
  [
    { label: '歼20', value: 1 },
    { label: 'F22', value: 2 },
    { label: '秋月级', value: 3 },
    { label: 'T50', value: 4 }
  ]
]
```
</details>

#### **二级联动**
<details>
<summary>点击展开二级联动数据结构</summary>

``` javascript
pickerValueArray:
[
  {
    label: '飞机票',
    value: 0,
    children: [{
      label: '经济舱',
      value: 1
    },
    {
      label: '商务舱',
      value: 2
    }
    ]
  },
  {
    label: '火车票',
    value: 1,
    children: [{
      label: '卧铺',
      value: 1
    },
    {
      label: '坐票',
      value: 2
    },
    {
      label: '站票',
      value: 3
    }
    ]
  },
  {
    label: '汽车票',
    value: 3,
    children: [{
      label: '快班',
      value: 1
    },
    {
      label: '普通',
      value: 2
    }
    ]
  }
]
```
</details>


#### **三级联动**
<details>
<summary>点击展开三级联动数据结构</summary>

``` javascript
pickerValueArray:
[
  {
    label: 'phone',
    value: 0,
    children: [
      {
        label: 'iphone',
        value: 1,
        children: [{
          label: 'iphoneX',
          value: 1
        },
        {
          label: 'iphone8',
          value: 2
        }, {
          label: 'iphone8 Plus',
          value: 3
        }]
      },
      {
        label: 'android',
        value: 1,
        children: [
          {
            label: 'vivo',
            value: 1
          },
          {
            label: '魅族',
            value: 2
          }, {
            label: '小米',
            value: 3
          }
        ]
      }
    ]
  },
  {
    label: 'PC',
    value: 0,
    children: [
      {
        label: 'mac',
        value: 1,
        children: [
          {
            label: 'macbook Pro',
            value: 1
          },
          {
            label: 'iMac',
            value: 2
          }, {
            label: 'mackbook',
            value: 3
          }, {
            label: 'mackbook air',
            value: 3
          }
        ]
      },
      {
        label: 'windows',
        value: 1,
        children: [
          {
            label: 'dell',
            value: 1
          },
          {
            label: 'surface',
            value: 2
          }, {
            label: 'thinkpad',
            value: 3
          }
        ]
      }
    ]
  }
]
```
</details>